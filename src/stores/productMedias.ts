import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { ProductMedia, ProductMediaPost } from 'types';

interface ProductMediasStoreProps {
  loading: boolean;
  success: boolean;
  data: ProductMedia[];
}

class ProductMediasStore {
  _productMedias: ProductMediasStoreProps = {
    loading: false,
    success: false,
    data: [],
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._productMedias.loading;
  }

  get success() {
    return this._productMedias.success;
  }

  get productMediasData() {
    return this._productMedias.data;
  }

  getProductMedias = async () => {
    this._productMedias.loading = true;
    this._productMedias.success = false;
    const { data } = await this.http.get<ProductMedia[]>('/productMedias');
    runInAction(() => {
      this._productMedias.loading = false;
      if (data) {
        this._productMedias.success = true;
        this._productMedias.data = data;
      }
    });
  };

  postProductMedias = async (imageUrl: string, productId: string) => {
    await this.getProductMedias();
    console.log(this.productMediasData);
    const mediaForSelectedProduct = this.productMediasData.filter(
      pm => pm.productId === productId
    );
    const lastMediaForSelectedProduct =
      mediaForSelectedProduct[mediaForSelectedProduct.length - 1];
    if (lastMediaForSelectedProduct?.url === imageUrl) {
      return;
    }
    const productMediaObj = {
      url: imageUrl,
      type: 'PHOTO',
      productId,
    };
    const { data } = await this.http.post('/productMedias', productMediaObj);
    runInAction(() => {
      if (data) {
        console.log('new product media added', data);
      }
    });
  };
}

export default new ProductMediasStore();
