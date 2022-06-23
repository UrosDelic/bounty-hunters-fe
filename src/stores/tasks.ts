import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import dayjs from 'dayjs';
import { Task } from 'types';
import { Tasks } from 'types';

interface TaskStoreProps {
  loading: boolean;
  data: { task: Task; createdAtDate: string; updatedAtDate: string }[];
  taskById: Task | undefined;
}

class TasksStore {
  _tasks: TaskStoreProps = {
    loading: false,
    data: [],
    taskById: undefined,
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

  getMyTasks = async () => {
    this._tasks.loading = true;
    const { data } = await this.http.get<Tasks>('/tasks');
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        this._tasks.data = data.data.map(data => {
          const createdAtDate = dayjs(data.createdAt).format('DD-MM-YYYY');
          const updatedAtDate = dayjs(data.updatedAt).format('DD-MM-YYYY');
          return { task: data, createdAtDate, updatedAtDate };
        });
      }
    });
  };

  getTaskDetailsById = async (id: string) => {
    this._tasks.loading = true;
    const { data } = await this.http.get<Task>(`/tasks/${id}`);
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        this._tasks.taskById = data;
      }
    });
  };
}

export default new TasksStore();
