import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { ProductAttribute } from 'types';

interface ProductAttributesStoreProps {
  data: ProductAttribute[];
  loading: boolean;
  success: boolean;
}

class ProductAttributesStore {
  _productAttributes: ProductAttributesStoreProps = {
    data: [],
    loading: false,
    success: false,
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._productAttributes.loading;
  }

  get success() {
    return this._productAttributes.success;
  }

  get productAttributes() {
    return this._productAttributes.data;
  }

  getProductAttributes = async () => {
    this._productAttributes.loading = true;
    const { data } = await this.http.get<ProductAttribute[]>(
      '/productAttributes'
    );
    runInAction(() => {
      this._productAttributes.loading = false;
      if (data) {
        this._productAttributes.success = true;
        this._productAttributes.data = data;
        // console.log('roles data iz stora', sizes);
      }
    });
  };
}

export default new ProductAttributesStore();
