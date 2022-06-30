import { makeAutoObservable } from 'mobx';
interface searchFiltersProps {
  user_id: string;
  status: string;
}

class searchFilters {
  constructor() {
    makeAutoObservable(this);
  }

  filters: searchFiltersProps = {
    user_id: '',
    status: '',
  };
  get searchedUser() {
    return this.filters.user_id;
  }
  get searchedStatus() {
    return this.filters.status;
  }


  setSearchUser = (term: string) => {
    this.filters.user_id = term;
  };

  setSearchStatus = (status: string) =>{
    this.filters.status = status;
  }
}

export default new searchFilters();
