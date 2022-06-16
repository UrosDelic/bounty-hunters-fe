import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
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

class LoginStore {
  _googleUserData: GoogleLoginResponse | null = null;

  _user: UserToken = {
    exp: null,
    roles: [],
    userId: '',
  };

  _signInData: SingInData = {
    accessToken: '',
    refreshToken: '',
  };

  get idToken() {
    return this._googleUserData?.tokenId;
  }

  get userRoles() {
    return this._user.roles.map(role => {
      return role;
    });
  }
  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  login = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (!response.code) {
      this._googleUserData = response as GoogleLoginResponse;
      this.signIn();
    } else this._googleUserData = null;
  };

  signIn = async () => {
    const { data } = await this.http.post<SingInData>('/auth/login/google', {
      tokenId: this.idToken,
    });
    runInAction(() => {
      if (data) {
        this._signInData.accessToken = data.accessToken;
        this._user = jwtDecode(this._signInData.accessToken);
      }
    });
  };
}

export default new LoginStore();
