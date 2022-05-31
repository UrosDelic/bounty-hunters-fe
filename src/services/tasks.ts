import { initHttp } from '../http';

class TasksService {
  http: any;
  constructor() {
    this.http = initHttp();
  }
  getTasks() {
    return this.http.get('/tasks');
  }
  getTasksById(id: any) {
    return this.http.get(`/tasks/${id}`);
  }
}

export default TasksService;
