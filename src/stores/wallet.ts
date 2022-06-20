import dayjs from 'dayjs';
import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { WalletElement, WalletOrderData, WalletTaskData } from 'types';

interface WalletStoreProps {
  loading: boolean;
  success: boolean;
  orders: WalletElement[];
  tasks: WalletElement[];
}

class WalletStore {
  _wallet: WalletStoreProps = {
    loading: false,
    success: false,
    orders: [],
    tasks: [],
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._wallet.loading;
  }

  get success() {
    return this._wallet.success;
  }

  get orders() {
    return this._wallet.orders;
  }

  get tasks() {
    return this._wallet.tasks;
  }

  getOrders = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
    const { data } = await this.http.get<WalletOrderData>(
      '/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/transactions/order'
    );
    runInAction(() => {
      this._wallet.loading = false;
      if (data) {
        this._wallet.success = true;
        this._wallet.orders = data?.data.map(singleOrder => {
          const { createdAt, order } = singleOrder;
          const { productAttributesOrder } = order;
          const name = productAttributesOrder[0]?.product?.name;
          const price = productAttributesOrder[0]?.product?.price || 0;
          return {
            createdAt: dayjs(createdAt).format('DD/MM/YYYY'),
            name,
            price,
          };
        });
        console.log('wallet orders data iz stora', data.data);
      }
    });
  };

  getTasks = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
    const { data } = await this.http.get<WalletTaskData>(
      '/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/transactions/task'
    );
    runInAction(() => {
      this._wallet.loading = false;
      if (data) {
        this._wallet.success = true;
        this._wallet.tasks = data?.data.map(singleTask => {
          const { task, createdAt } = singleTask;
          const { title, points } = task;
          return {
            createdAt: dayjs(createdAt).format('DD/MM/YYYY'),
            name: title,
            price: points,
          };
        });
        console.log('wallet tasks data iz stora', data.data);
      }
    });
  };
}

export default new WalletStore();
