interface Product {
  product: {
    name: string;
    price: number;
  };
}

interface ProductAttributesOrder {
  productAttributesOrder: Product[];
}

export interface WalletOrder {
  createdAt: string;
  order: ProductAttributesOrder;
}

export interface WalletOrderData {
  data: WalletOrder[];
}

interface Task {
  title: string;
  points: number;
}

export interface WalletTask {
  createdAt: string;
  task: Task;
}

export interface WalletTaskData {
  data: WalletTask[];
}

export interface WalletElement {
  createdAt: string;
  name: string;
  price: number;
}
