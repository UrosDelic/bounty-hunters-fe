import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Users } from 'types';

interface UsersStoreProps {
  loading: boolean;
  success: boolean;
  data: Users[];
}

interface UsersDataProps {
  data: Users[];
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

  get users() {
    return this._users.data;
  }

  getUsers = async () => {
    this._users.loading = true;
    this._users.success = false;
    const { data } = await this.http.get<UsersDataProps>('/users?limit=15');
    runInAction(() => {
      this._users.loading = false;
      if (data) {
        this._users.success = true;
        this._users.data = data?.data;
        console.log('users data iz stora', data.data);
      }
    });
  };
}

export default new UsersStore();
