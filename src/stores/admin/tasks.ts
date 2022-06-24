import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';

import { Task, Tasks } from 'types';

interface TaskStoreProps {
  loading: boolean;
  data: Task[];
  limit: number;
  offset: number;
  hasMore: boolean;
  taskById: Task | undefined;
}

class AdminTasksStore { _tasks: TaskStoreProps = {
    loading: false,
    data: [],
    limit: 6,
    offset: 1,
    hasMore: true,
    taskById: undefined,
  };
 
  constructor(private http = initHttp()) {
    makeAutoObservable(this)
    
  }

  get tasks() {

    return this._tasks.data;
  }

  get tasksById() {
    return this._tasks.taskById;
  }

  get loading() {
    return this._tasks.loading;
  }
  get checkForMore() {
    return this._tasks.hasMore;
  }

  getTasks = async () => {
  
    this._tasks.loading = true;
    const { data } = await this.http.get<Tasks>(
      `/tasks?page=${this._tasks.offset}&limit=${this._tasks.limit}`
    );
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        if (!data?.data.length) {
          this._tasks.hasMore = false;
        }
        this._tasks.data = [...this._tasks.data, ...data?.data];
      }
    });
  };

  createTask = async (params: any) => {
    const { data, error } = await this.http.post<Task>('/tasks', params);
    if (data) {
      runInAction(() => {
        this._tasks.data.unshift(data)
      });
    }
    return { data, error };
  };

  deleteTask = async (id: string) => {
    const { error } = await this.http.delete<Task>(`/tasks/${id}`);
    if (!error) {
      runInAction(() => {
        let newData = this._tasks.data.filter(t => t.id !== id);
        this._tasks.data = newData;
      });
    }
    return { error };
  };

  updateTask = async (id: string, payload: any) => {

    const { data, error } = await this.http.patch<Task>(
      `/tasks/${id}`,
      payload
    );
    if (!error) {
      runInAction(() => {
        this._tasks.data
          .filter(data => data.id === id)
          .map(el => {
            el.title = payload?.title;
            el.points = payload?.points;
            
            return el;
          });
      });
    }
    return { data, error };
  };

  loadMoreTasks = async () => {
    this._tasks.offset++;
    this.getTasks();
    this._tasks.loading = false;
  };
}

export default new AdminTasksStore();
