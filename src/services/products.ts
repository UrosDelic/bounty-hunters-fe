import { initHttp } from '../http';
import { PaginationInfo } from '../types';
import { Product } from '../types/product';

class ProductsService {
  constructor(private http = initHttp()) {}

  getProducts() {
    return this.http.get<{ info: PaginationInfo; products: Product[] }>(
      '/products'
    );
  }
}

export default ProductsService;
