// TODO double check type
import { ProductMedia } from './index';

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
  productMedia: ProductMedia[];
}

export interface ProductPost {
  description: string;
  name: string;
  price: number;
  status: ProductStatus;
}

export interface ProductPatch {
  description: string;
  name: string;
  price: number;
}
