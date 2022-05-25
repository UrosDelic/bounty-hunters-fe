import { initHttp } from '../http';

class TasksService {
  constructor() {
    this.http = initHttp();
  }

  getTasks() {
    return this.http.get('api/users?page=2');
  }
}

export default TasksService;
