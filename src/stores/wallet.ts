import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  WalletOrder,
  WalletTask,
  WalletOrderData,
  WalletTaskData,
} from 'types';
import jwtDecode from 'jwt-decode';

interface WalletStoreProps {
  loading: boolean;
  success: boolean;
  orders: WalletOrder[];
  tasks: WalletTask[];
  totalPrice: number;
  totalPoints: number;
  limit: number;
  orderPage: number;
  taskPage: number;
  totalOrdersPages: number;
  totalTasksPages: number;
  ordersHasMore: boolean;
  tasksHasMore: boolean;
}

class WalletStore {
  _wallet: WalletStoreProps = {
    loading: false,
    success: false,
    orders: [],
    tasks: [],
    totalPrice: 0,
    totalPoints: 0,
    limit: 4,
    orderPage: 1,
    taskPage: 1,
    totalOrdersPages: 1,
    totalTasksPages: 1,
    ordersHasMore: true,
    tasksHasMore: true,
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

  get ordersHasMore() {
    return this._wallet.ordersHasMore;
  }

  get tasksHasMore() {
    return this._wallet.tasksHasMore;
  }

  getOrders = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
    this._wallet.orderPage = 1;
    this._wallet.ordersHasMore = true;
    const userId = this.getUserId();
    const { data } = await this.http.get<WalletOrderData>(
      `/users/${userId}/transactions/order?sortBy=createdAt&sortMode=asc&page=${this._wallet.orderPage}&limit=${this._wallet.limit}`
    );
    runInAction(() => {
      this._wallet.loading = false;
      if (data) {
        this._wallet.success = true;
        this._wallet.totalPrice = data?.info.totalPrice;
        this._wallet.totalOrdersPages = data?.info.totalPages;
        this._wallet.orders = data?.data;
        console.log('wallet orders data iz stora', data?.data);
      }
    });
  };

  getTasks = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
    this._wallet.taskPage = 1;
    this._wallet.tasksHasMore = true;
    const userId = this.getUserId();
    const { data } = await this.http.get<WalletTaskData>(
      `/users/${userId}/transactions/task?sortBy=createdAt&sortMode=asc&page=${this._wallet.taskPage}&limit=1`
    );
    runInAction(() => {
      this._wallet.loading = false;
      if (data) {
        this._wallet.success = true;
        this._wallet.totalPoints = data?.info.totalPoints;
        this._wallet.totalTasksPages = data?.info.totalPages;
        this._wallet.tasks = data?.data;
        console.log('wallet tasks data iz stora', data.data);
      }
    });
  };

  loadMoreOrders = async () => {
    this._wallet.orderPage++;
    const userId = this.getUserId();
    const { data } = await this.http.get<WalletOrderData>(
      `/users/${userId}/transactions/order?sortBy=createdAt&sortMode=asc&page=${this._wallet.orderPage}&limit=${this._wallet.limit}`
    );
    runInAction(() => {
      if (data) {
        if (!data?.data.length) this._wallet.ordersHasMore = false;
        this._wallet.loading = false;
        this._wallet.success = true;
        this._wallet.orders = [...this._wallet.orders, ...data?.data];
        console.log('novi orders data', this._wallet.orders);
      }
    });
  };

  loadMoreTasks = async () => {
    this._wallet.taskPage++;
    const userId = this.getUserId();
    const { data } = await this.http.get<WalletTaskData>(
      `/users/${userId}/transactions/task?sortBy=createdAt&sortMode=asc&page=${this._wallet.taskPage}&limit=1`
    );
    runInAction(() => {
      if (data) {
        if (!data?.data.length) this._wallet.tasksHasMore = false;
        this._wallet.loading = false;
        this._wallet.success = true;
        this._wallet.tasks = [...this._wallet.tasks, ...data?.data];
        console.log('novi tasks data', this._wallet.tasks);
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

export default new WalletStore();
