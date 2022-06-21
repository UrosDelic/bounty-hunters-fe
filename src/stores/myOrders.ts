import { initHttp } from 'http/index';
// import jwtDecode from 'jwt-decode';
import { makeAutoObservable, runInAction } from 'mobx';
import { MyOrders } from 'types';

interface MyOrderStoreProps {
  loading: boolean;
  success: boolean;
  limit: number;
  page: number;
  hasMore: boolean;
  data: MyOrders[];
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
    // const accessToken = localStorage.get('accessToken');
    // const decoded = jwtDecode(accessToken).id
    this._MyOrders.page = 1;
    this._MyOrders.hasMore = true;
    const { data } = await this.http.get<MyOrderDataProps>(
      `/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/orders?page=${this._MyOrders.page}&limit=${this._MyOrders.limit}`
    );
    runInAction(() => {
      this._MyOrders.loading = false;
      if (data) {
        this._MyOrders.success = true;
        this._MyOrders.data = data?.data;
        console.log('my orders iz stora', data);
      }
    });
  };

  loadMoreOrders = async () => {
    this._MyOrders.page++;
    const { data } = await this.http.get<MyOrderDataProps>(
      `/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/orders?page=${this._MyOrders.page}&limit=${this._MyOrders.limit}`
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
}

export default new MyOrdersStore();
