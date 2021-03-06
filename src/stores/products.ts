import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { Product, ProductPost, ProductPatch } from 'types';

interface ProductsStoreProps {
  loading: boolean;
  success: boolean;
  data: Product[];
  productById: Product | undefined;
  productByIdName: string;
  limit: number;
  page: number;
  hasMore: boolean;
}

interface ProductsDataProps {
  data: Product[];
}

class ProductsStore {
  _products: ProductsStoreProps = {
    loading: false,
    success: false,
    data: [],
    productById: undefined,
    productByIdName: '',
    limit: 10,
    page: 1,
    hasMore: true,
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

  get productById() {
    return this._products.productById;
  }

  get productByIdName() {
    return this._products.productByIdName;
  }

  get hasMore() {
    return this._products.hasMore;
  }

  getProducts = async () => {
    this._products.loading = true;
    this._products.success = false;
    const { data } = await this.http.get<ProductsDataProps>(
      `/products/details?page=1&limit=${this._products.limit}`
    );
    runInAction(() => {
      this._products.loading = false;
      if (data) {
        this._products.success = true;
        this._products.data = data?.data;
      }
    });
  };

  getProductById = async (id: string | undefined) => {
    this._products.loading = true;
    this._products.success = false;
    const { data } = await this.http.get<Product>(`/products/${id}/details`);
    runInAction(() => {
      this._products.loading = false;
      if (data) {
        this._products.success = true;
        this._products.productById = data;
        this._products.productByIdName = data.name;
      }
    });
  };

  setActiveStatus = async (id: string) => {
    const res = await this.http.patch(`/products/${id}`, {
      status: 'ACTIVE',
    });
    runInAction(() => {
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
      if (res) {
        console.log('status updated - inactive');
      }
    });
  };

  loadMoreProducts = async () => {
    this._products.page++;
    const { data } = await this.http.get<ProductsDataProps>(
      `/products/details?page=${this._products.page}&limit=${this._products.limit}`
    );
    runInAction(() => {
      if (data) {
        if (!data?.data.length) this._products.hasMore = false;
        this._products.loading = false;
        this._products.success = true;
        this._products.data = [...this._products.data, ...data?.data];
      }
    });
  };

  addNewProduct = async (value: ProductPost) => {
    const { data } = await this.http.post(`/products`, value);
    runInAction(() => {
      if (data) {
        this.getProducts();
        console.log('new product added value added', data);
      }
    });
  };

  changeProduct = async (values: ProductPatch, id: string) => {
    const { data } = await this.http.patch(`/products/${id}`, values);
    runInAction(() => {
      if (data) {
        this.getProducts();
        console.log('product value changed', data);
      }
    });
  };
}

export default new ProductsStore();
