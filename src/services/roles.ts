import { UserRoles } from 'types';
import { initHttp } from '../http';

class RolesService {
  constructor(private http = initHttp()) {}

  getRoles() {
    return this.http.get<UserRoles[]>('/roles');
  }
}

export default RolesService;
