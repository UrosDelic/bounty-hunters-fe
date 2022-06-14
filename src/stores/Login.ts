import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';

class LoginStore {
  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  login = async (credentials: {}) => {
    const { data } = await this.http.post(`/auth/login/google`, credentials);
    runInAction(() => {
      if (data) {
        console.log(data, 'data iz login');
      }
    });
  };
}

export default new LoginStore();
