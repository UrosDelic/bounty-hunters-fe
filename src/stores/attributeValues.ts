import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { AttributeValue, AttributeValuePut } from 'types';

interface AttributeValuesStoreProps {
  data: AttributeValue[];
  colorData: AttributeValue[];
  sizeData: AttributeValue[];
  loading: boolean;
  success: boolean;
  selectedSize: string;
  selectedColor: string;
}

class AttributeValuesStore {
  _attributeValues: AttributeValuesStoreProps = {
    data: [],
    colorData: [],
    sizeData: [],
    loading: false,
    success: false,
    selectedSize: '',
    selectedColor: '',
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._attributeValues.loading;
  }

  get success() {
    return this._attributeValues.success;
  }

  get attributeValues() {
    return this._attributeValues.data;
  }

  get sizeData() {
    return this._attributeValues.sizeData;
  }

  get selectedSize() {
    return this._attributeValues.selectedSize;
  }

  get colorData() {
    return this._attributeValues.colorData;
  }

  get selectedColor() {
    return this._attributeValues.selectedColor;
  }

  changeSize(value: string) {
    this._attributeValues.selectedSize = value;
  }

  changeColor(value: string) {
    this._attributeValues.selectedColor = value;
  }

  getAttributeValues = async () => {
    this._attributeValues.loading = true;
    const { data } = await this.http.get<AttributeValue[]>('/attributeValues');
    runInAction(() => {
      this._attributeValues.loading = false;
      if (data) {
        this._attributeValues.success = true;
        this._attributeValues.data = data;
        console.log('roles data iz stora', data);
      }
    });
  };

  changeAttributeValue = async (id: string, value: AttributeValuePut) => {
    this._attributeValues.loading = true;
    const { data } = await this.http.patch(`/attributeValues/${id}`, value);
    runInAction(() => {
      if (!data) {
        this._attributeValues.loading = false;
        this.getAttributeValues();
        console.log('attribute value updated', data);
      }
    });
  };

  deleteAttributeValue = async (id: string) => {
    const { data } = await this.http.delete(`/attributeValues/${id}`);
    runInAction(() => {
      if (!data) {
        this.getAttributeValues();
        console.log('attribute value deleted', data);
      }
    });
  };

  getSizeAndColorAttributeValues = async () => {
    this._attributeValues.loading = true;
    const { data } = await this.http.get<AttributeValue[]>('/attributeValues');
    runInAction(() => {
      this._attributeValues.loading = false;
      if (data) {
        this._attributeValues.success = true;
        this._attributeValues.data = data;
        const colors = data.filter(
          av => av.productAttribute.name.toLowerCase() === 'colors'
        );
        const sizes = data.filter(
          av => av.productAttribute.name.toLowerCase() === 'size'
        );
        this._attributeValues.colorData = colors;
        this._attributeValues.selectedColor = colors[0]?.id;
        this._attributeValues.sizeData = sizes;
        this._attributeValues.selectedSize = sizes[0]?.id;
        console.log('roles data iz stora', sizes);
      }
    });
  };
}

export default new AttributeValuesStore();
