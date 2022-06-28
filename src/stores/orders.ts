import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Orders, OrderPost } from 'types';

interface OrderStoreProps {
  loading: boolean;
  success: boolean;
  isOrderSent: boolean;
  limit: number;
  page: number;
  hasMore: boolean;
  data: Orders[];
}

interface OrdersDataProps {
  data: Orders[];
}

class OrdersStore {
  _orders: OrderStoreProps = {
    loading: false,
    success: false,
    isOrderSent: false,
    limit: 9,
    page: 1,
    hasMore: true,
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

  get isOrderSent() {
    return this._orders.isOrderSent;
  }

  get hasMore() {
    return this._orders.hasMore;
  }

  getOrders = async () => {
    this._orders.loading = true;
    this._orders.success = false;
    this._orders.page = 1;
    this._orders.hasMore = true;
    const { data } = await this.http.get<OrdersDataProps>(
      `/orders?page=${this._orders.page}&limit=${this._orders.limit}`
    );
    runInAction(() => {
      this._orders.loading = false;
      if (data) {
        this._orders.success = true;
        this._orders.data = data?.data;
        console.log('orders data iz stora', data);
      }
    });
  };

  makeAnOrder = async (order: OrderPost) => {
    this._orders.isOrderSent = false;
    const { data } = await this.http.post('/orders', order);
    runInAction(() => {
      if (data) {
        this._orders.isOrderSent = true;
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

  loadMoreOrders = async () => {
    this._orders.page++;
    const { data } = await this.http.get<OrdersDataProps>(
      `/orders?page=${this._orders.page}&limit=${this._orders.limit}`
    );
    runInAction(() => {
      if (data) {
        if (!data?.data.length) this._orders.hasMore = false;
        this._orders.loading = false;
        this._orders.success = true;
        this._orders.data = [...this._orders.data, ...data?.data];
      }
    });
  };
}

export default new OrdersStore();
