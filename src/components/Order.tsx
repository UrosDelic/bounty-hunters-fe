import { Box, Text, Flex, Select, Heading } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import OrdersStore from '../stores/orders';
import dayjs from 'dayjs';

type OrderProps = {
  id: string;
  createdAt: string;
  status: string;
};

function Order({ id, createdAt, status }: OrderProps) {
  const [statusValue, setStatusValue] = useState(status);
  const statusColors: any = {
    PENDING: 'orders.purple',
    IN_PROGRESS: 'orders.oliveGreen',
    FULFILLED: 'orders.lightGreen',
  };
  const selectColor = statusColors[statusValue];

  function changeStatus(e: ChangeEvent<HTMLSelectElement>) {
    setStatusValue(e.target.value);
    if (e.target.value === 'IN_PROGRESS') {
      OrdersStore.changeToInProgress(id);
    } else if (e.target.value === 'FULFILLED') {
      OrdersStore.changeToFulfilled(id);
    }
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid"
      borderColor="main.gray"
      padding="20px 24px"
    >
      <Box>
        <Heading fontSize="18px">{id}</Heading>
        <Text fontSize="14px">{dayjs(createdAt).format('DD-MM-YYYY')}</Text>
      </Box>
      <Select
        value={statusValue}
        onChange={changeStatus}
        backgroundColor={selectColor}
        width="fit-content"
        textTransform="capitalize"
        _focus={{ outline: 0 }}
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
    </Flex>
  );
}

export default Order;
