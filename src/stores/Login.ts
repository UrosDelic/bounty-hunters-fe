import { ThreeDRotationSharp } from '@mui/icons-material';
import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { Users } from 'types';

class LoginStore {
  _googleUserData: GoogleLoginResponse | null = null;

  _userData: Users | null = null;

  get idToken() {
    return this._googleUserData?.tokenId;
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
    const { data } = await this.http.post('/auth/login/google', {
      tokenId: this.idToken,
    });
    runInAction(() => {
      if (data) {
        console.log(data, 'data iz signin');
      }
    });
  };
}

export default new LoginStore();
