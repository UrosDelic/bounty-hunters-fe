import { initHttp } from '../http';

class OrdersService {
  http: any;

  constructor() {
    this.http = initHttp();
  }

  getOrders() {
    return this.http.get('/orders');
  }
}

export default OrdersService;
