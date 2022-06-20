import { NotificationsType, NotificationsPagination } from 'types';
import { makeAutoObservable, runInAction } from 'mobx';
import { initHttp } from 'http/index';

interface NotificationsStoreProps {
  loading: boolean;
  limit: number;
  offset: number;
  data: NotificationsType[];
  info: NotificationsPagination[];
  hasMore: boolean;
}

interface NotificationDetails {
  data: NotificationsType[];
  info: NotificationsPagination;
}

class Notifications {
  notifications: NotificationsStoreProps = {
    loading: false,
    hasMore: true,
    data: [],
    info: [],
    limit: 6,
    offset: 1,

  };

  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }
  get loading() {
    return this.notifications.loading;
  }
  get allNotifications() {
    return this.notifications.data;
  }
  get checkForMore() {
    return this.notifications.hasMore;
  }
get notificationsCount(){
  return this.notifications.info
}
  getAllNotifications = async () => {
    this.notifications.loading = true;
    const { data } = await this.http.get<NotificationDetails>(
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

  getNotificationsCount = async ()=>{
    const { data } = await this.http.get<NotificationDetails>(
      `/notifications`
    );
    if (data) {
      runInAction(() => {
        this.notifications.info = [data?.info];
      })
    }

  }

  loadMoreNotifications() {
    this.notifications.offset++;
    this.getAllNotifications();
    this.notifications.loading = false;
  }
}

export default new Notifications();
