import axios from 'axios';
import config from '../config';

class HttpCommunicator {
  http: any;
  constructor() {
    this.http = axios.create(config);
  }

  get(url: string) {
    return this.http
      .get(url)
      .then((res: any) => {
        return res.data.data;
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
