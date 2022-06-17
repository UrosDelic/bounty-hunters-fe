import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import jwtDecode from 'jwt-decode';
interface SingInData {
  accessToken: string;
  refreshToken: string;
}

interface UserToken {
  exp: number | null;
  roles: [];
  userId: string;
}

interface googleUserData {
  clientId: string;
  credential: string;
}

const userDefault: UserToken = {
  exp: null,
  roles: [],
  userId: '',
};

class LoginStore {
  _googleUserDataTest: googleUserData = {
    clientId: '',
    credential: '',
  };

  // _user: UserToken = token ? jwtDecode(token) : userDefault;
  _authResoved = false;
  _user: UserToken = {
    exp: null,
    roles: [],
    userId: '',
  };

  _signInData: SingInData = {
    accessToken: '',
    refreshToken: '',
  };

  get isAuth() {
    return this._user.exp ? this._user.exp < Date.now() : false;
  }

  get authResolved() {
    return this._authResoved;
  }

  get idToken() {
    return this._googleUserDataTest?.credential;
  }

  get userRoles() {
    return this._user.roles.map(role => {
      return role;
    });
    /**
     * roles = {
     *  Super_Admin: boolean,
     * ...
     * }
     */
  }
  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }
  login = async (response: googleUserData) => {
    if (response) {
      this._googleUserDataTest.credential = response.credential;
      this.signIn();
    }
  };

  logout = () => {
    localStorage.removeItem('token');
    this._user = userDefault;
  };

  signIn = async () => {
    const { data } = await this.http.post<SingInData>('/auth/login/google', {
      tokenId: this.idToken,
    });
    runInAction(() => {
      if (data) {
        this._signInData.accessToken = data.accessToken;
        localStorage.setItem('token', data.accessToken);
        this._user = jwtDecode(this._signInData.accessToken);
      }
    });
  };

  checkUserFromStorage = () => {
    if (!this._authResoved) {
      this._authResoved = true;
      const token = localStorage.getItem('token');
      if (token) {
        this._user = jwtDecode(token);
      }
    }
  };
}

export default new LoginStore();
