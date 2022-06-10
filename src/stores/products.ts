import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Product } from 'types';

interface ProductsStoreProps {
  loading: boolean;
  success: boolean;
  data: Product[];
}

interface ProductsDataProps {
  products: Product[];
}

class ProductsStore {
  _products: ProductsStoreProps = {
    loading: false,
    success: false,
    data: [],
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._products.loading;
  }

  get success() {
    return this._products.success;
  }

  get products() {
    return this._products.data;
  }

  getProducts = async () => {
    this._products.loading = true;
    this._products.success = false;
    const { data } = await this.http.get<ProductsDataProps>('/products');
    runInAction(() => {
      this._products.loading = false;
      if (data) {
        this._products.success = true;
        this._products.data = data?.products;
        console.log('products data iz stora', data?.products);
      }
    });
  };
}

export default new ProductsStore();
