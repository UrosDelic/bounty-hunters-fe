import { NotificationsType, NotificationsPagination } from 'types';
import { makeAutoObservable, runInAction } from 'mobx';
import { initHttp } from 'http/index';
import login from './Login';
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

class UserNotificationsStore {
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
  get notificationsCount() {
    return this.notifications.info[0];
  }
  getUserNotifications = async () => {

    this.notifications.loading = true;
    const { data } = await this.http.get<NotificationDetails>(
      `/users/${login.userId}/notifications?page=${this.notifications.offset}&limit=${this.notifications.limit}`
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

  getNotificationCount = async () => {
    const { data } = await this.http.get<NotificationDetails>(
      `/users/${login.userId}/notifications`
    );
    if (data) {
      runInAction(() => {
        this.notifications.info = [data?.info];
      });
    }
  };
  markAllAsRead = async () => {
    const { error } = await this.http.patch(`/users/${login.userId}/notifications/markAllAsRead`);
    this.notifications.info[0].unreadCount = 0
   
    if (!error) {
      runInAction(() => {
        this.notifications.data.map(data => data.readStatus = 'READ')
      })
    }

  };

  readNotification = async (id: string) => {
    const { error } = await this.http.patch(`/notifications/${id}/markAsRead`);

    if (!error) {
      runInAction(() => {
        this.notifications.data.find(
          someobject => someobject.id === id
        )!.readStatus = 'READ';
      });
    }
  };

  loadMoreNotifications() {
    this.notifications.offset++;
    this.getUserNotifications();
    this.notifications.loading = false;
  }
}

export default new UserNotificationsStore();
