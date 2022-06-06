import { Orders } from 'types';
import { initHttp } from '../http';

class OrdersService {
  constructor(private http = initHttp()) {}

  getOrders() {
    return this.http.get<Orders[]>('/orders');
  }
}

export default OrdersService;
