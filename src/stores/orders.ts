import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Orders } from 'types';

interface OrderStoreProps {
  loading: boolean;
  success: boolean;
  data: Orders[];
}

class OrdersStore {
  _orders: OrderStoreProps = {
    loading: false,
    success: false,
    data: [],
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._orders.loading;
  }

  get success() {
    return this._orders.success;
  }

  get orders() {
    return this._orders.data;
  }

  getOrders = async () => {
    this._orders.loading = true;
    this._orders.success = false;
    const { data } = await this.http.get<Orders[]>('/orders');
    runInAction(() => {
      this._orders.loading = false;
      if (data) {
        this._orders.success = true;
        this._orders.data = data;
        console.log('orders data iz stora', data);
      }
    });
  };
}

export default new OrdersStore();
