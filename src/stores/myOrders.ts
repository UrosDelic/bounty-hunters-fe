import { initHttp } from 'http/index';
import jwtDecode from 'jwt-decode';
import { makeAutoObservable, runInAction } from 'mobx';
import { MyOrders } from 'types';

interface MyOrderStoreProps {
  loading: boolean;
  success: boolean;
  limit: number;
  page: number;
  hasMore: boolean;
  data: MyOrders[];
  userId: string;
}

interface MyOrderDataProps {
  data: MyOrders[];
}

class MyOrdersStore {
  _MyOrders: MyOrderStoreProps = {
    loading: false,
    success: false,
    limit: 4,
    page: 1,
    hasMore: true,
    data: [],
    userId: '',
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._MyOrders.loading;
  }

  get success() {
    return this._MyOrders.success;
  }

  get myOrders() {
    return this._MyOrders.data;
  }

  get hasMore() {
    return this._MyOrders.hasMore;
  }

  getMyOrders = async () => {
    this._MyOrders.loading = true;
    this._MyOrders.success = false;
    this._MyOrders.page = 1;
    this._MyOrders.hasMore = true;
    const userId = this.getUserId();
    const { data } = await this.http.get<MyOrderDataProps>(
      `/users/${userId}/orders?page=${this._MyOrders.page}&limit=${this._MyOrders.limit}`
    );
    runInAction(() => {
      this._MyOrders.loading = false;
      if (data) {
        this._MyOrders.success = true;
        this._MyOrders.data = data?.data;
      }
    });
  };

  loadMoreOrders = async () => {
    this._MyOrders.page++;
    const userId = this.getUserId();
    const { data } = await this.http.get<MyOrderDataProps>(
      `/users/${userId}/orders?page=${this._MyOrders.page}&limit=${this._MyOrders.limit}`
    );
    runInAction(() => {
      if (data) {
        if (!data?.data.length) this._MyOrders.hasMore = false;
        this._MyOrders.loading = false;
        this._MyOrders.success = true;
        this._MyOrders.data = [...this._MyOrders.data, ...data?.data];
      }
    });
  };

  getUserId = () => {
    const bhToken = localStorage.getItem('bh-token') as string;
    const decoded = jwtDecode<{ userId: string }>(bhToken);
    const userId = decoded.userId;
    return userId;
  };
}

export default new MyOrdersStore();
