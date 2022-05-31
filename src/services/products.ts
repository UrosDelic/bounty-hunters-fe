import { initHttp } from '../http';

class ProductsService {
  http: any;

  constructor() {
    this.http = initHttp();
  }

  getProducts() {
    return this.http.get('/products');
  }
}

export default ProductsService;
