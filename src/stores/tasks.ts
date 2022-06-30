import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import dayjs from 'dayjs';
import { Task } from 'types';
import LoginStore from './Login';
import { Tasks } from 'types';

interface TaskStoreProps {
  loading: boolean;
  data: Task[];
  taskById: Task | undefined;
  limit: number;
  page: number;
  hasMore: boolean;
  success: boolean;
}

class TasksStore {
  _tasks: TaskStoreProps = {
    loading: false,
    data: [],
    taskById: undefined,
    limit: 9,
    page: 1,
    hasMore: true,
    success: false,
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
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

  get hasMore() {
    return this._tasks.hasMore;
  }

  getMyTasks = async () => {
    this._tasks.loading = true;
    this._tasks.success = false;
    this._tasks.page = 1;
    this._tasks.hasMore = true;
    const { data } = await this.http.get<Tasks>(
      `/users/${LoginStore.userId}/tasks?page=${this._tasks.page}&limit=${this._tasks.limit}`
    );
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        this._tasks.data = data.data;
      }
    });
  };

  getTaskDetailsById = async (id: string) => {
    this._tasks.loading = true;
    const { data } = await this.http.get<Task>(`/tasks/${id}/details`);
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        this._tasks.taskById = data;
      }
    });
  };

  addTaskSolution = async (id: string, solution: string) => {
    const { data } = await this.http.patch<Task>(
      `/tasks/${id}/submitSolution`,
      { solution: solution }
    );
    runInAction(() => {
      if (data) {
        console.log(data, 'iz solution');
      }
    });
  };

  loadMoreTasks = async () => {
    this._tasks.page++;
    const { data } = await this.http.get<TaskStoreProps>(
      `/tasks?page=${this._tasks.page}&limit=${this._tasks.limit}`
    );
    runInAction(() => {
      if (data) {
        if (!data?.data.length) this._tasks.hasMore = false;
        this._tasks.loading = false;
        this._tasks.success = true;
        this._tasks.data = [...this._tasks.data, ...data?.data];
      }
    });
  };
}

export default new TasksStore();
