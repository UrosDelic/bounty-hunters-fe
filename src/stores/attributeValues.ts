import { initHttp } from 'http/index';
import { makeAutoObservable, runInAction } from 'mobx';
// import { Role } from 'types';

interface AttributeValuesStoreProps {
  data: any;
  sizeId: string;
  colorId: string;
}

class AttributeValuesStore {
  _roles: AttributeValuesStoreProps = {
    data: [],
    sizeId: '',
    colorId: '',
  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get rolesData() {
    return this._roles.data;
  }

  getIdByName = async (name: string) => {
    const { data } = await this.http.get<any>('/productAttributes');
    runInAction(() => {
      if (data) {
        const wantedObject = data.find(
          (obj: any) => obj.name.toLowerCase() === name.toLowerCase()
        );
        const idByName = wantedObject.id;
        return idByName;
      }
    });
  };
}

export default new AttributeValuesStore();
