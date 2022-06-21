import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Users } from 'types';

interface UsersStoreProps {
  loading: boolean;
  success: boolean;
  isUserUpdated: boolean;
  data: Users[];
}

interface UsersDataProps {
  data: Users[];
}

class UsersStore {
  _users: UsersStoreProps = {
    loading: false,
    success: false,
    isUserUpdated: false,
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

  get isUserUpdated() {
    return this._users.isUserUpdated;
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

  updateRoles = async (userId: string, roleIds: any) => {
    this._users.isUserUpdated = false;
    const { data } = await this.http.patch(`/users/${userId}/updateRoles`, {
      roleIds,
    });
    runInAction(() => {
      if (data) {
        this._users.isUserUpdated = true;
        console.log('updated users roles from store', data);
      }
    });
  };
}

export default new UsersStore();
