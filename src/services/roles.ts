import { initHttp } from '../http';

class RolesService {
  http: any;

  constructor() {
    this.http = initHttp();
  }

  getRoles() {
    return this.http.get('/roles');
  }
}

export default RolesService;
