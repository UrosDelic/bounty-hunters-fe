import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Task } from 'types';

interface TaskStoreProps {
  loading: boolean;
  data: Task[];
}

class TasksStore {
  _tasks: TaskStoreProps = {
    loading: false,
    data: [],
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get tasks() {
    return this._tasks.data;
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
        this._tasks.data = data;
        console.log(data, 'iz stora');
      }
    });
  };
}

export default new TasksStore();
