import axios from 'axios';
import config from '../config';
import LoginStore from '../stores/Login';
function axiosRequestInterceptor(conf: any) {
  const token = localStorage.getItem('bh-token');
  if (token) {
    conf.headers.Authorization = `Bearer ${token}`;
  }
  return conf;
}

class HttpCommunicator {
  constructor(private http = axios.create(config)) {
    this.http.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    this.http.interceptors.request.use(axiosRequestInterceptor);
    this.http.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        if (err.response.status === 401 || err.response.status === 403) {
          LoginStore.logout();
        }
      }
    );
  }

  get<T = unknown>(url: string): Promise<{ data?: T; error?: any }> {
    return this.http
      .get(url)
      .then((res: any) => {
        return res.data;
      })
      .catch((error: any) => {
        return { error };
      });
  }
  post<T = unknown>(url: string, data: {}): Promise<{ data?: T; error?: any }> {
    return this.http
      .post(url, data)
      .then((res: any) => {
        return res.data;
      })
      .catch((error: any) => {
        return { error };
      });
  }

  delete<T = unknown>(
    url: string,
    data?: any
  ): Promise<{ data?: T; error?: any }> {
    return this.http
      .delete(url, data)
      .then((res: any) => {
        return res.data;
      })
      .catch((error: any) => {
        return { error };
      });
  }

  patch<T = unknown>(
    url: string,
    data?: any
  ): Promise<{ data?: T; error?: any }> {
    return this.http
      .patch(url, data)
      .then((res: any) => {
        return res.data;
      })
      .catch((error: any) => {
        return { error };
      });
  }
}

let instance: HttpCommunicator | null = null;
export function initHttp() {
  if (!instance) {
    instance = new HttpCommunicator();
  }
  return instance;
}

export default HttpCommunicator;
