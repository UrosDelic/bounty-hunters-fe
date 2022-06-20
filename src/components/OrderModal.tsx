import { Text, Button, Box, Flex, Input, Image } from '@chakra-ui/react';
import { ModalLayout } from './index';
import { observer } from 'mobx-react';
import OrdersStore from '../stores/orders';
import AttributeValuesStore from '../stores/attributeValues';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import shirt from '../img/shirt.jpg';

export type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  price: number | undefined;
};

function OrderModal({ isOpen, onClose, name, price }: OrderModalProps) {
  const [address, setAddress] = useState('');
  const { id } = useParams();
  const { selectedColor, selectedSize } = AttributeValuesStore;
  const { orderSent } = OrdersStore;

  function handleOrder(e: FormEvent) {
    e.preventDefault();
    if (address.trim()) {
      const orderObject = {
        userId: 'a0d6132d-9c7d-46fa-a3b8-1e20d918d605',
        shippingAddress: address,
        productId: id,
        attributeValueIds: [selectedSize, selectedColor],
      };
      console.log(orderObject);
      OrdersStore.makeAnOrder(orderObject);
      if (orderSent) {
        onClose();
      }
    }
  }

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      <form onSubmit={handleOrder}>
        <Input
          variant="outline"
          placeholder="Enter shipping address..."
          focusBorderColor="purple"
          maxW="400px"
          value={address}
          onChange={e => setAddress(e.target.value)}
          marginBottom="15px"
        />
        <Button
          minW="100px"
          backgroundColor="purple"
          _hover={{ backgroundColor: 'lightPurple' }}
          onClick={handleOrder}
        >
          Buy
        </Button>
      </form>
    </ModalLayout>
  );
}

export default observer(OrderModal);
