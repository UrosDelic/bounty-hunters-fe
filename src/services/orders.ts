import { initHttp } from '../http';

class OrdersService {
  constructor(private http = initHttp()) {}

  getOrders() {
    return this.http.get('/orders');
  }
}

export default OrdersService;
