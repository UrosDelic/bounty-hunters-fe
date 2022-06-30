export interface Orders {
  id: string;
  createdAt: string;
  updatedAt: string;
  shippingAddress: string;
  status: string;
  userId: string;
  user: {
    firstName: string;
    lastName: string;
    email: string | null;
  };
}

export interface OrderPost {
  userId: string;
  shippingAddress: string;
  productId: string | undefined;
  attributeValueIds: string[];
}
