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
