import { Box, Text, Flex, Select, Heading } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import OrdersStore from '../stores/orders';
import dayjs from 'dayjs';

type OrderProps = {
  id: string;
  createdAt: string;
  status: string;
  shippingAddress: string;
};

function Order({ id, createdAt, status, shippingAddress }: OrderProps) {
  const [statusValue, setStatusValue] = useState(status);

  function changeStatus(e: ChangeEvent<HTMLSelectElement>) {
    setStatusValue(e.target.value);
    if (e.target.value === 'IN_PROGRESS') {
      OrdersStore.changeToInProgress(id);
    } else if (e.target.value === 'PENDING') {
      OrdersStore.changeToPending(id);
    } else if (e.target.value === 'FULFILLED') {
      OrdersStore.changeToFulfilled(id);
    }
  }

  return (
    <Box width="100%" padding="20px 24px">
      <Box marginBottom="20px">
        <Heading fontSize="18px">{shippingAddress}</Heading>
        <Text fontSize="14px">{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
      </Box>
      <Select
        value={statusValue}
        onChange={changeStatus}
        backgroundColor="orders.purple"
        width={['65%', 'fit-content']}
        textTransform="capitalize"
        _focus={{ outline: 0 }}
        isDisabled={statusValue === 'FULFILLED'}
        _disabled={{ opacity: 1 }}
      >
        <option style={{ backgroundColor: 'inherit' }} value="PENDING">
          pending
        </option>
        <option style={{ backgroundColor: 'inherit' }} value="IN_PROGRESS">
          in progress
        </option>
        <option style={{ backgroundColor: 'inherit' }} value="FULFILLED">
          fulfilled
        </option>
      </Select>
    </Box>
  );
}

export default Order;
