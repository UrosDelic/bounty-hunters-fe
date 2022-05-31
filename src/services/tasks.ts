import { initHttp } from '../http';

class TasksService {
  constructor() {
    this.http = initHttp();
  }
getTasks(){
  return this.http.get('/tasks');
}
  getTasksById(id) {
    return this.http.get(`/tasks/${id}`);
  }
}

export default TasksService;
