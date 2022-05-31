import { initHttp } from '../http';

class UsersService {
  http: any;

  constructor() {
    this.http = initHttp();
  }

  getUsers() {
    return this.http.get('/users');
  }
}

export default UsersService;
