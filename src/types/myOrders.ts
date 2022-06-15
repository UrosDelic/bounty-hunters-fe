import { Orders } from 'types';

export interface MyOrders extends Orders {
  productAttributesOrder: ProductAttributesOrderObj[];
}

interface ProductAttributesOrderObj {
  product: ProductProps;
  attributeValue: AttributeValueProps;
}

interface ProductProps {
  name: string;
  price: number;
}

interface AttributeValueProps {
  productAttribute: { name: string };
  value: string;
}
