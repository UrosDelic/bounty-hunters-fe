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

export interface AttributeValuePut {
  value: string;
}

export interface AttributeValuePost {
  value: string;
  productAttributeId: string;
}
