export interface AttributeValue {
  id: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  productAttributeId: string;
  productAttribute: {
    name: string;
  };
}
