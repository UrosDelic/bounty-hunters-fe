import { initHttp } from 'http/index';
// import jwtDecode from 'jwt-decode';
import { makeAutoObservable, runInAction } from 'mobx';
import { MyOrders } from 'types';

interface MyOrderStoreProps {
  loading: boolean;
  success: boolean;
  data: MyOrders[];
}

interface MyOrderDataProps {
  orders: MyOrders[];
}

class MyOrdersStore {
  _MyOrders: MyOrderStoreProps = {
    loading: false,
    success: false,
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

  getMyOrders = async () => {
    this._MyOrders.loading = true;
    this._MyOrders.success = false;
    // const accessToken = localStorage.get('accessToken');
    // const decoded = jwtDecode(accessToken).id

    const { data } = await this.http.get<MyOrderDataProps[]>(
      '/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/myOrders'
    );
    runInAction(() => {
      this._MyOrders.loading = false;
      if (data) {
        this._MyOrders.success = true;
        this._MyOrders.data = data[0].orders;
        console.log('my orders iz stora', data);
      }
    });
  };
}

export default new MyOrdersStore();
