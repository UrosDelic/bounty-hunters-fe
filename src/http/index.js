class HttpCommunicator {
  constructor() {}
}

let instance = null;
export function initHttp() {
  if (!instance) {
    instance = new HttpCommunicator();
  }
  return instance;
}

export default HttpCommunicator;
