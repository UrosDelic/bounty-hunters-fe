import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Product } from 'types';

interface ProductsStoreProps {
  loading: boolean;
  success: boolean;
  isStatusChanged: boolean;
  data: Product[];
}

interface ProductsDataProps {
  products: Product[];
}

class ProductsStore {
  _products: ProductsStoreProps = {
    loading: false,
    success: false,
    isStatusChanged: false,
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

  get isStatusChanged() {
    return this._products.isStatusChanged;
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

  setActiveStatus = async (id: string) => {
    const res = await this.http.patch(`/products/${id}`, {
      status: 'ACTIVE',
    });
    runInAction(() => {
      // this._products.isStatusChanged = !this._products.isStatusChanged;
      if (res) {
        console.log('status updated - active');
      }
    });
  };

  setInactiveStatus = async (id: string) => {
    const res = await this.http.patch(`/products/${id}`, {
      status: 'INACTIVE',
    });
    runInAction(() => {
      // this._products.isStatusChanged = !this._products.isStatusChanged;
      if (res) {
        console.log('status updated - inactive');
      }
    });
  };
}

export default new ProductsStore();
