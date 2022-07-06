export interface ProductMedia {
  id: string;
  type: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  productId: string;
}

export interface ProductMediaPost {
  type: string;
  url: string;
  productId: string;
}
