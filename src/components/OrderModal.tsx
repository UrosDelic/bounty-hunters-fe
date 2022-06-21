import { Button, Input } from '@chakra-ui/react';
import { ModalLayout } from './index';
import { observer } from 'mobx-react';
import OrdersStore from '../stores/orders';
import AttributeValuesStore from '../stores/attributeValues';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

function OrderModal({ isOpen, onClose, name }: OrderModalProps) {
  const [address, setAddress] = useState('');
  const { id } = useParams();
  const { selectedColor, selectedSize } = AttributeValuesStore;
  const { isOrderSent } = OrdersStore;

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
