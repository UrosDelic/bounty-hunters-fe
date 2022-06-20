import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Orders } from 'types';

interface OrderStoreProps {
  loading: boolean;
  success: boolean;
  data: Orders[];
}

interface OrdersDataProps {
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
    const { data } = await this.http.get<OrdersDataProps>('/orders?limit=15');
    runInAction(() => {
      this._orders.loading = false;
      if (data) {
        this._orders.success = true;
        this._orders.data = data?.data;
        console.log('orders data iz stora', data);
      }
    });
  };

  makeAnOrder = async (order: any) => {
    const { data } = await this.http.post('/orders', order);
    runInAction(() => {
      if (data) {
        console.log('order sent (iz stora)', data);
      }
    });
  };

  changeToPending = async (id: string) => {
    const res = await this.http.patch(`/orders/${id}/orderPending`);
    runInAction(() => {
      if (res) {
        console.log(`status updated - pending`, res);
      }
    });
  };

  changeToInProgress = async (id: string) => {
    const res = await this.http.patch(`/orders/${id}/orderInProgress`);
    runInAction(() => {
      if (res) {
        console.log(`status updated - in progress`, res);
      }
    });
  };

  changeToFulfilled = async (id: string) => {
    const res = await this.http.patch(`/orders/${id}/fulfilledOrder`);
    runInAction(() => {
      if (res) {
        console.log(`status updated - fulfilled`, res);
      }
    });
  };
}

export default new OrdersStore();
