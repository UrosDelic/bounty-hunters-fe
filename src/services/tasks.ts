import { initHttp } from '../http';
import { Task } from '../types';

class TasksService {
  constructor(private http = initHttp()) {}

  async getTasks() {
    const { data, error } = await this.http.get<Task[]>('/tasks');

    console.log(data, error);

    return data || error;
  }

  getTasksById(id: string) {
    return this.http.get(`/tasks/${id}`);
  }
}

export default TasksService;
