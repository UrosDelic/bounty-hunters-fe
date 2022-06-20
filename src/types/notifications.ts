
export interface NotificationsType {
  id: string;
  message: string;
  type: string;
  readStatus: string;
  createdAt: string;
  updatedAt: string;
  userId: string;

}
  
export interface NotificationsPagination { 
  unreadCount: number;
}
 