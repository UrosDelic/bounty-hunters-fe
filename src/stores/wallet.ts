import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';

interface WalletStoreProps {
  loading: boolean;
  success: boolean;
  data: any;
}

// interface UsersDataProps {
//   users: any;
// }

class UsersStore {
  _wallet: WalletStoreProps = {
    loading: false,
    success: false,
    data: [],
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

  get users() {
    return this._wallet.data;
  }

  getUsers = async () => {
    this._wallet.loading = true;
    this._wallet.success = false;
    const { data } = await this.http.get<any>(
      '/users/a0d6132d-9c7d-46fa-a3b8-1e20d918d605/myWallet'
    );
    runInAction(() => {
      this._wallet.loading = false;
      if (data) {
        this._wallet.success = true;
        this._wallet.data = data;
        console.log('wallet data iz stora', data);
      }
    });
  };
}

export default new UsersStore();
