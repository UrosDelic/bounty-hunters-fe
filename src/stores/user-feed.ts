import { NotificationsType } from 'types';
import { makeAutoObservable, runInAction } from 'mobx';
import { initHttp } from 'http/index';

interface UserFeedStoreProps {
  loading: boolean;
  limit: number;
  offset: number;
  data: NotificationsType[];
  hasMore: boolean;
}

class userFeeds {
  notifications: UserFeedStoreProps = {
    loading: false,
    hasMore: true,
    data: [],
    limit: 5,
    offset: 1,

  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }
  get loading() {
    return this.notifications.loading;
  }
  get allFeeds() {
    return this.notifications.data;
  }
  get checkForMore() {
    return this.notifications.hasMore;
  }

  collectFeeds = async () => {
    this.notifications.loading = true;
    const { data } = await this.http.get<UserFeedStoreProps>(
      `/notifications?page=${this.notifications.offset}&limit=${this.notifications.limit}`
    );

    if (data) {
      runInAction(() => {
        if (!data?.data.length) {
          this.notifications.hasMore = false;
        }
        this.notifications.data = [...this.notifications.data, ...data?.data];
        this.notifications.loading = false;
      });
    }
  };

 

  loadMoreFeeds() {
    this.notifications.offset++;
    this.collectFeeds();
    this.notifications.loading = false;
  }
}

export default new userFeeds();
