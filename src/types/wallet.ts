export interface WalletOrder {
  createdAt: string;
  orderId: string;
  name: string;
  price: number;
}

export interface WalletOrderData {
  info: {
    totalPrice: number;
    totalPages: number;
  };
  data: WalletOrder[];
}

export interface WalletTask {
  createdAt: string;
  title: string;
  points: number;
  id: string;
}

export interface WalletTaskData {
  info: {
    totalPoints: number;
    totalPages: number;
  };
  data: WalletTask[];
}
