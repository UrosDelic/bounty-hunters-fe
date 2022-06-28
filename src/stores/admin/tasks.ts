import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Task, Tasks } from 'types';

interface TaskStoreProps {
  loading: boolean;
  data: Task[];
  info: number;
  limit: number;
  page: number;
  hasMore: boolean;
  searchTerm: string;
  taskById: Task | undefined;
}

class AdminTasksStore {
  _tasks: TaskStoreProps = {
    loading: false,
    data: [],
    searchTerm: '',
    info: 0,
    limit: 8,
    page: 1,
    hasMore: true,
    taskById: undefined,
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get tasks() {
    return this._tasks.data;
  }
  get totalTaskCount() {
    return this._tasks.info;
  }
  get tasksLength() {
    return this._tasks.data.length;
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
  initialTaskLoad = async () => {
    this._tasks.loading = true;
    this._tasks.hasMore = true;
    this._tasks.data = [];
    this._tasks.info = 0;
    this._tasks.page = 1;

    const { data } = await this.http.get<Tasks>(`/tasks?page=1&limit=8`);
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        if (!data?.data.length) {
          this._tasks.hasMore = false;
        }

        this._tasks.data = data?.data;
        this._tasks.info = data.info.totalCount;
      }
    });
  };

  getTasks = async () => {
    this._tasks.loading = true;
    const { data } = await this.http.get<Tasks>(
      `/tasks?page=${this._tasks.page}&limit=${this._tasks.limit}`
    );
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        if (!data?.data.length) {
          this._tasks.hasMore = false;
        }
        this._tasks.data = [...this._tasks.data, ...data?.data];
        this._tasks.info = data.info.totalCount;
      }
    });
  };

  createTask = async (params: any) => {
    const { data, error } = await this.http.post<Task>('/tasks', params);
    if (data) {
      runInAction(() => {
        this._tasks.data.unshift(data);
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
            el.description = payload?.description;

            return el;
          });
      });
    }
    return { data, error };
  };
  approveTask = async (id: string) => {
    const { data, error } = await this.http.patch(`/tasks/${id}/approveTask`);

    runInAction(() => {
      this._tasks.data
        .filter(data => data.id === id)
        .map(el => {
          el.status = 'APPROVED';
          return el;
        });
    });
    return { data, error };
  };
  rejectTask = async (id: string, payload: any) => {
    const message = { rejectedMessage: payload };
    const { data, error } = await this.http.patch(
      `/tasks/${id}/rejectTask`,
      message
    );
    runInAction(() => {
      this._tasks.data
        .filter(data => data.id === id)
        .map(el => {
          el.status = 'REJECTED';
          return el;
        });
    });
    return { data, error };
  };
  searchByTitle = async (title: string) => {
    this._tasks.loading = true;
    const { data } = await this.http.get<Tasks>(
      `/tasks?title=${title}&page=1&limit=8`
    );
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        this._tasks.data = data?.data;
        this._tasks.info = data.info.totalCount;
        if (data?.data.length >= data.info.totalCount) {
          this._tasks.hasMore = false;
        }
      }
    });
  };
  loadMoreTasks = () => {
    this._tasks.page++;
    this.getTasks();
    this._tasks.loading = false;
  };
}

export default new AdminTasksStore();