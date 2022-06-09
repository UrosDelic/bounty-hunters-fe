import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import dayjs from 'dayjs';
import { Task } from 'types';

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
    // return this._tasks.data.map(data => {
    //   const createdAtDate = format(
    //     new Date(data.createdAt),
    //     'LLLL d, yyyy hh:mm a'
    //   );
    //   const updatedAtDate = format(
    //     new Date(data.updatedAt),
    //     'LLLL d, yyyy hh:mm a'
    //   );
    //   return { ...data, createdAtDate, updatedAtDate };
    // });
  }

  get tasksById() {
    return this._tasks.taskById;
    // if (!this._tasks.taskById) {
    //   return;
    // }
    // const createdAtDate = format(
    //   new Date(this._tasks.taskById.createdAt),
    //   'LLLL d, yyyy hh:mm a'
    // );
    // const updatedAtDate = format(
    //   new Date(this._tasks.taskById.updatedAt),
    //   'LLLL d, yyyy hh:mm a'
    // );
    // return { ...this._tasks.taskById, createdAtDate, updatedAtDate };
  }

  get loading() {
    return this._tasks.loading;
  }

  getTasks = async () => {
    this._tasks.loading = true;
    const { data } = await this.http.get<Task[]>('/tasks');
    runInAction(() => {
      this._tasks.loading = false;
      if (data) {
        this._tasks.data = data.map(data => {
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
