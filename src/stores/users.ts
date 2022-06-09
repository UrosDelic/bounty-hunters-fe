import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Users, UserRoles } from 'types';

interface UsersStoreProps {
  loading: boolean;
  success: boolean;
  data: Users[];
}

interface UsersDataProps {
  users: Users[];
}

class UsersStore {
  _users: UsersStoreProps = {
    loading: false,
    success: false,
    data: [],
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._users.loading;
  }

  get success() {
    return this._users.success;
  }

  get data() {
    return this._users.data;
  }

  getUsers = async () => {
    this._users.loading = true;
    this._users.success = false;
    const { data } = await this.http.get<UsersDataProps>('/users');
    runInAction(() => {
      this._users.loading = false;
      if (data) {
        this._users.success = true;
        this._users.data = data?.users;
        console.log('users data iz stora', data.users);
      }
    });
  };
}

export default new UsersStore();
