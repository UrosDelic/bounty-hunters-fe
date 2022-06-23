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

  get orderPage() {
    return this._wallet.orderPage;
  }

  get taskPage() {
    return this._wallet.taskPage;
  }

  get totalOrderPages() {
    return this._wallet.totalOrdersPages;
  }

  get totalTaskPages() {
    return this._wallet.totalTasksPages;
  }

  getOrders = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
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
    const userId = this.getUserId();
    const { data } = await this.http.get<WalletTaskData>(
      `/users/${userId}/transactions/task?sortBy=createdAt&sortMode=asc&page=${this._wallet.taskPage}&limit=${this._wallet.limit}`
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

  getUserId = () => {
    const bhToken = localStorage.getItem('bh-token') as string;
    const decoded = jwtDecode<{ userId: string }>(bhToken);
    const userId = decoded.userId;
    return userId;
  };

  refetchOrders = async () => {
    const userId = this.getUserId();
    const { data } = await this.http.get<WalletOrderData>(
      `/users/${userId}/transactions/order?sortBy=createdAt&sortMode=asc&page=${this._wallet.orderPage}&limit=${this._wallet.limit}`
    );
    runInAction(() => {
      if (data) {
        this._wallet.orders = data?.data;
      }
    });
  };

  refetchTasks = async () => {
    const userId = this.getUserId();
    const { data } = await this.http.get<WalletTaskData>(
      `/users/${userId}/transactions/task?sortBy=createdAt&sortMode=asc&page=${this._wallet.taskPage}&limit=${this._wallet.limit}`
    );
    runInAction(() => {
      if (data) {
        this._wallet.tasks = data?.data;
      }
    });
  };

  increaseOrderPage = async () => {
    if (this._wallet.orderPage < this._wallet.totalOrdersPages) {
      this._wallet.orderPage++;
      this.refetchOrders();
    }
  };

  increaseTaskPage() {
    if (this._wallet.taskPage < this._wallet.totalTasksPages) {
      this._wallet.taskPage++;
      this.refetchTasks();
    }
  }

  decreaseOrderPage() {
    if (this._wallet.orderPage > 1) {
      this._wallet.orderPage--;
      this.refetchOrders();
    }
  }

  decreaseTaskPage() {
    if (this._wallet.taskPage > 1) {
      this._wallet.taskPage--;
      this.refetchTasks();
    }
  }

  setTaskPage(pageNum: string) {
    this._wallet.taskPage = Number(pageNum);
  }

  setOrderPage(pageNum: string) {
    this._wallet.orderPage = Number(pageNum);
  }
}

export default new WalletStore();
