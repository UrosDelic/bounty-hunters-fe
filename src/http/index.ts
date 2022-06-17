import axios from 'axios';
import config from '../config';

class HttpCommunicator {
  constructor(private http = axios.create(config)) {}

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

  post<T = unknown>(
    url: string,
    data?: any
  ): Promise<{ data?: T; error?: any }> {
    return this.http
      .post(url, data)
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
