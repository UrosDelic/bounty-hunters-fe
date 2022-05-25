import axios from 'axios';
import generateConfig from '../config';

const config = generateConfig();

class HttpCommunicator {
  constructor() {
    this.http = axios.create({ baseURL: config.baseURL });
  }

  get(url) {
    return this.http
      .get(url)
      .then(data => {
        return { data };
      })
      .catch(error => {
        return { error };
      });
  }
}

let instance = null;
export function initHttp() {
  if (!instance) {
    instance = new HttpCommunicator();
  }
  return instance;
}

export default HttpCommunicator;
