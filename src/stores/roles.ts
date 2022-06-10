import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Role } from 'types';

interface RoleStoreProps {
  loading: boolean;
  success: boolean;
  data: Role[];
}

class RolesStore {
  _roles: RoleStoreProps = {
    loading: false,
    success: false,
    data: [],
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._roles.loading;
  }

  get success() {
    return this._roles.success;
  }

  get rolesData() {
    return this._roles.data;
  }

  getRoles = async () => {
    this._roles.loading = true;
    this._roles.success = false;
    const { data } = await this.http.get<Role[]>('/roles');
    runInAction(() => {
      this._roles.loading = false;
      if (data) {
        this._roles.success = true;
        this._roles.data = data;
      }
    });
  };
}

export default new RolesStore();
