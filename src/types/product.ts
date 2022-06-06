// TODO double check type
export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface Product {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  price: number;
  status: ProductStatus;
  updatedAt: string;
}
