import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  WalletOrder,
  WalletTask,
  WalletOrderData,
  WalletTaskData,
} from 'types';

interface WalletStoreProps {
  loading: boolean;
  success: boolean;
  orders: WalletOrder[];
  tasks: WalletTask[];
  totalPrice: number;
  totalPoints: number;
}

class WalletStore {
  _wallet: WalletStoreProps = {
    loading: false,
    success: false,
    orders: [],
    tasks: [],
    totalPrice: 0,
    totalPoints: 0,
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

  get totalPrice() {
    return this._wallet.totalPrice;
  }

  get totalPoints() {
    return this._wallet.totalPoints;
  }

  getOrders = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
    const { data } = await this.http.get<WalletOrderData>(
      '/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/transactions/order?sortBy=createdAt&sortMode=asc'
    );
    runInAction(() => {
      this._wallet.loading = false;
      if (data) {
        this._wallet.success = true;
        this._wallet.totalPrice = data?.info.totalPrice;
        this._wallet.orders = data?.data;
        console.log('wallet orders data iz stora', data?.data);
      }
    });
  };

  getTasks = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
    const { data } = await this.http.get<WalletTaskData>(
      '/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/transactions/task?sortBy=createdAt&sortMode=asc'
    );
    runInAction(() => {
      this._wallet.loading = false;
      if (data) {
        this._wallet.success = true;
        this._wallet.totalPoints = data?.info.totalPoints;
        this._wallet.tasks = data?.data;
        console.log('wallet tasks data iz stora', data.data);
      }
    });
  };
}

export default new WalletStore();
