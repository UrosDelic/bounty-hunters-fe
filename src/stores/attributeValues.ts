import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
import { AttributeValue } from 'types';

interface AttributeValuesStoreProps {
  data: AttributeValue[];
  colorData: AttributeValue[];
  sizeData: AttributeValue[];
  loading: boolean;
  success: boolean;
}

class AttributeValuesStore {
  _roles: AttributeValuesStoreProps = {
    data: [],
    colorData: [],
    sizeData: [],
    loading: false,
    success: false,
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._roles.loading;
  }

  get success() {
    return this._roles.success;
  }

  get attributeValues() {
    return this._roles.data;
  }

  get sizeData() {
    return this._roles.sizeData;
  }

  get colorData() {
    return this._roles.colorData;
  }

  getAttributeValues = async () => {
    this._roles.loading = true;
    const { data } = await this.http.get<AttributeValue[]>('/attributeValues');
    runInAction(() => {
      this._roles.loading = false;
      if (data) {
        this._roles.success = true;
        this._roles.data = data;
        const colors = data.filter(
          av => av.productAttribute.name.toLowerCase() === 'colors'
        );
        const sizes = data.filter(
          av => av.productAttribute.name.toLowerCase() === 'size'
        );
        this._roles.colorData = colors;
        this._roles.sizeData = sizes;
        console.log('roles data iz stora', sizes);
      }
    });
  };
}

export default new AttributeValuesStore();
