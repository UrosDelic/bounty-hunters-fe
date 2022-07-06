import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Users } from 'types';
import LoginStore from './Login';

interface UsersStoreProps {
  loading: boolean;
  success: boolean;
  isUserUpdated: boolean;
  limit: number;
  page: number;
  hasMore: boolean;
  data: Users[];
  searchTerm: string;
  currentUser: Users | undefined;
  currentUserId: string;
  currentUserLoading: boolean;
  currentUserSuccess: boolean;
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
    currentUser: undefined,
    currentUserId: '',
    currentUserLoading: false,
    currentUserSuccess: false,
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

  get currentUser() {
    return this._users.currentUser;
  }

  get currentUserId() {
    return this._users.currentUserId;
  }

  get currentUserLoading() {
    return this._users.currentUserLoading;
  }

  get currentUserSuccess() {
    return this._users.currentUserSuccess;
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
      `/users?page=1&limit=${this._users.limit}${
        firstName ? `&firstName=${firstName}` : ``
      }${lastName ? `?lastName=${lastName}` : ``}`
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

  updateRoles = async (userId: string | undefined, roleIds: any) => {
    this._users.isUserUpdated = false;
    const { data } = await this.http.patch(`/users/${userId}/updateRoles`, {
      roleIds,
    });
    runInAction(() => {
      if (data) {
        this._users.isUserUpdated = true;
        this.getUsers();
        LoginStore.checkUserFromStorage();
      }
    });
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

  getUserById = async () => {
    this._users.currentUserLoading = true;
    this._users.currentUserSuccess = false;
    const { data } = await this.http.get<Users>(
      `/users/${this._users.currentUserId}`
    );
    runInAction(() => {
      if (data) {
        this._users.currentUserLoading = false;
        this._users.currentUserSuccess = true;
        this._users.currentUser = data;
      }
    });
  };

  setCurrentUserId(id: string) {
    this._users.currentUserId = id;
  }
}

export default new UsersStore();
