import { makeAutoObservable } from 'mobx';
interface searchFiltersProps {
  user_id: string;
  status: string;
  title:string;
}

class searchFilters {
  constructor() {
    makeAutoObservable(this);
  }

  filters: searchFiltersProps = {
    user_id: '',
    status: '',
    title:''
  };
  get searchedUser() {
    return this.filters.user_id;
  }
  get searchedStatus() {
    return this.filters.status;
  }

  get searchedTitle(){
    return this.filters.title;
  }

  setSearchUser = (user: string) => {
    this.filters.user_id = user;
  };

  setSearchStatus = (status: string) =>{
    this.filters.status = status;
  }
  setSearchTitle = (title: string) =>{
    this.filters.title = title;
  }

  
}

export default new searchFilters();
