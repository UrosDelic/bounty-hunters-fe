import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import jwtDecode from 'jwt-decode';
import { ThirtyFpsOutlined } from '@mui/icons-material';
interface SingInData {
  accessToken: string;
  refreshToken: string;
}

interface UserToken {
  exp: number | null;
  roles: [];
  userId: string;
}
interface Profile {
  name: string;
  picture: string;
  email: string;
}
interface googleUserData {
  clientId: string;
  credential: string;
}

interface Roles {
  employee: string;
  admin: string;
  super_admin: string;
}

const userDefault: UserToken = {
  exp: null,
  roles: [],
  userId: '',
};
class LoginStore {
  _googleUserData: googleUserData = {
    clientId: '',
    credential: '',
  };

  userRoles: Roles = {
    employee: '',
    admin: '',
    super_admin: '',
  };

  // _user: UserToken = token ? jwtDecode(token) : userDefault;
  _authResolved = false;

  _user: UserToken = {
    exp: null,
    roles: [],
    userId: '',
  };

  _signInData: SingInData = {
    accessToken: '',
    refreshToken: '',
  };

  _profile: Profile = {
    name: '',
    picture: '',
    email: '',
  };

  get googleProfile() {
    return this._profile;
  }

  get userId() {
    return this._user.userId;
  }

  get isAuth() {
    return this._user.exp ? this._user.exp < Date.now() : false;
  }

  get authResolved() {
    return this._authResolved;
  }

  get idToken() {
    return this._googleUserData?.credential;
  }

  get roles() {
    return this.userRoles;
  }

  get isEmployee() {
    return this.userRoles.employee;
  }

  get isAdmin() {
    return this.userRoles.admin;
  }

  get isSuperAdmin() {
    return this.userRoles.super_admin;
  }

  // get userRoles() {
  //   return this._user.roles.map(role => {
  //     return role;
  //   });
  // }

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  login = async (response: googleUserData) => {
    if (response) {
      this._googleUserData = response;
      this._googleUserData.credential = response.credential;
      localStorage.setItem('bh-profile', response.credential);
      this.signIn();
    }
  };

  profileData = () => {
    const profile = localStorage.getItem('bh-profile') as string;
    if (profile) {
      const decode = jwtDecode<Profile>(profile);
      this._profile.name = decode.name;
      this._profile.picture = decode.picture;
      this._profile.email = decode.email;
    }
  };

  logout = () => {
    localStorage.removeItem('bh-token');
    localStorage.removeItem('bh-profile');
    this._user = userDefault;
  };

  signIn = async () => {
    const { data } = await this.http.post<SingInData>('/auth/login/google', {
      tokenId: this.idToken,
    });
    runInAction(() => {
      if (data) {
        this._signInData.accessToken = data.accessToken;
        localStorage.setItem('bh-token', data.accessToken);
        this._user = jwtDecode(this._signInData.accessToken);
        if (this._user.roles.length !== 0) {
          this.filterRolesOnLogin();
        }
      }
    });
  };

  checkUserFromStorage = () => {
    if (!this._authResolved) {
      this._authResolved = true;
      const token = localStorage.getItem('bh-token');
      if (token) {
        this._user = jwtDecode(token);
        this.filterRolesOnLogin();
      }
    }
  };

  filterRolesOnLogin = () => {
    this._user.roles.filter(role => {
      if (role === 'EMPLOYEE') {
        this.userRoles.employee = role;
      }
      if (role === 'ADMIN') {
        this.userRoles.admin = role;
      }
      if (role === 'SUPER_ADMIN') {
        this.userRoles.super_admin = role;
      }
    });
  };
}

export default new LoginStore();
