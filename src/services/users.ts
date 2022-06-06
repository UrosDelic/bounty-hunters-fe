import { initHttp } from '../http';
import { Users, PaginationInfo } from 'types';
class UsersService {
  constructor(private http = initHttp()) {}

  getUsers() {
    return this.http.get<{ info: PaginationInfo; users: Users[] }>('/users');
  }

  updateUserRoles(userId: string, roleId: string) {
    return this.http.patch<Users[]>(`/users/${userId}/changeRole`, { roleId });
  }
}

export default UsersService;
