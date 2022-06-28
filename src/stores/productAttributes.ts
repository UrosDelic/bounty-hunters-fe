import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { ProductAttribute, ProductAttributePost } from 'types';

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
      }
    });
  };

  addNewProductAttribute = async (productAttribute: ProductAttributePost) => {
    const { data } = await this.http.post(
      '/productAttributes',
      productAttribute
    );
    runInAction(() => {
      if (data) {
        console.log('productAttribute sent (iz stora)', data);
        this.getProductAttributes();
      }
    });
  };

  deleteProductAttribute = async (productAttributeId: string) => {
    const { data } = await this.http.delete(
      `/productAttributes/${productAttributeId}`
    );
    runInAction(() => {
      if (!data) {
        console.log('productAttribute deleted (iz stora)', data);
        this.getProductAttributes();
      }
    });
  };
}

export default new ProductAttributesStore();
