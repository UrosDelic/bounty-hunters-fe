import { Button, Input } from '@chakra-ui/react';
import { ModalLayout } from './index';
import { observer } from 'mobx-react';
import OrdersStore from '../stores/orders';
import AttributeValuesStore from '../stores/attributeValues';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

function OrderModal({ isOpen, onClose, name }: OrderModalProps) {
  const [address, setAddress] = useState('');
  const { id } = useParams();
  const { selectedColor, selectedSize } = AttributeValuesStore;
  const bhToken = localStorage.getItem('bh-token') as string;
  const decoded = jwtDecode<{ userId: string }>(bhToken);
  const userId = decoded.userId;
  const { isOrderSent } = OrdersStore;

  function handleOrder(e: FormEvent) {
    e.preventDefault();
    if (address.trim()) {
      const orderObject = {
        userId,
        shippingAddress: address,
        productId: id,
        attributeValueIds: [selectedSize, selectedColor],
      };
      OrdersStore.makeAnOrder(orderObject);
      setAddress('');
    }
  }

  useEffect(() => {
    if (isOrderSent) onClose();
  }, [isOrderSent]);

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
          backgroundColor="purple.500"
          _hover={{ backgroundColor: 'purple.400' }}
          onClick={handleOrder}
        >
          Buy
        </Button>
      </form>
    </ModalLayout>
  );
}

export default observer(OrderModal);
