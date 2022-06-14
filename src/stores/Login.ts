import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';

class LoginStore {
  _userData = {};
  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }
}

export default new LoginStore();
