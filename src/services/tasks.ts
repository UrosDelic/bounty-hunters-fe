import { initHttp } from '../http';
import { Task } from '../types';

class TasksService {
  constructor(private http = initHttp()) {}

  async getTasks() {
    return this.http.get<Task[]>('/tasks');
  }

  getTasksById(id: string) {
    return this.http.get(`/tasks/${id}`);
  }
}

export default TasksService;
