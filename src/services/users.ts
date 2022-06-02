import { initHttp } from '../http';

class UsersService {
  http: any;

  constructor() {
    this.http = initHttp();
  }

  getUsers() {
    return this.http.get('/users');
  }

  updateUserRoles(userId: string, roleId: string) {
    return this.http.patch(`/users/${userId}/changeRole`, { roleId });
  }
}

export default UsersService;
