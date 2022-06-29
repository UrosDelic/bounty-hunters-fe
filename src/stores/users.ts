import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Users } from 'types';

interface UsersStoreProps {
  loading: boolean;
  success: boolean;
  isUserUpdated: boolean;
  limit: number;
  page: number;
  hasMore: boolean;
  data: Users[];
  searchTerm: string;
}

interface UsersDataProps {
  data: Users[];
}

class UsersStore {
  _users: UsersStoreProps = {
    loading: false,
    success: false,
    isUserUpdated: false,
    limit: 10,
    page: 1,
    hasMore: true,
    data: [],
    searchTerm: '',
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

  get hasMore() {
    return this._users.hasMore;
  }
  get searchedUser() {
    return this._users.searchTerm;
  }

  getUsers = async () => {
    this._users.loading = true;
    this._users.success = false;
    this._users.page = 1;
    this._users.hasMore = true;
    const { data } = await this.http.get<UsersDataProps>(
      `/users?page=1&limit=${this._users.limit}`
    );
    runInAction(() => {
      this._users.loading = false;
      if (data) {
        this._users.success = true;
        this._users.data = data?.data;
      }
    });
  };
  searchUsers = async (firstName: any, lastName: any) => {
    this._users.loading = true;
    const { data } = await this.http.get<UsersDataProps>(
      `/users?page=1&limit=${this._users.limit}${firstName ? `&firstName=${firstName}` : ``}${lastName ? `?lastName=${lastName}` : ``}`
    );
    runInAction(() => {
      this._users.loading = false;
      if (data) {
        this._users.success = true;
        this._users.data = data?.data;
      }
    });
  };
  clearUsers() {
    this._users.data = [];
  }

  updateRoles = async (userId: string, roleIds: any) => {
    this._users.isUserUpdated = false;
    const { data } = await this.http.patch(`/users/${userId}/updateRoles`, {
      roleIds,
    });
    runInAction(() => {
      if (data) {
        this._users.isUserUpdated = true;
        this.getUsers();
        console.log('updated users roles from store', data);
      }
    });
  };

  setSearchTerm = (term: string) => {
    this._users.searchTerm = term;
  };

  loadMoreUsers = async () => {
    this._users.page++;
    const { data } = await this.http.get<UsersDataProps>(
      `/users?page=${this._users.page}&limit=${this._users.limit}`
    );
    runInAction(() => {
      if (data) {
        if (!data?.data.length) this._users.hasMore = false;
        this._users.loading = false;
        this._users.success = true;
        this._users.data = [...this._users.data, ...data?.data];
      }
    });
  };
}

export default new UsersStore();
