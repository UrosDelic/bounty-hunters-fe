import { Box, Text, Select, Heading } from '@chakra-ui/react';
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { StyledCard } from './index';
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
    <StyledCard>
      <Box width="100%" padding="20px 24px">
        <Box marginBottom="20px">
          <Heading fontSize="18px">{shippingAddress}</Heading>
          <Text fontSize="14px">{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
        </Box>
        <Select
          value={statusValue}
          onChange={changeStatus}
          backgroundColor={
            statusValue === 'FULFILLED' ? 'orders.lightGreen' : 'orders.purple'
          }
          width={['100%', '100%', 'fit-content']}
          textTransform="capitalize"
          _focus={{ outline: 0 }}
          isDisabled={statusValue === 'FULFILLED'}
          _disabled={{ opacity: 1 }}
          icon={
            statusValue === 'FULFILLED' ? <CheckIcon /> : <ChevronDownIcon />
          }
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
    </StyledCard>
  );
}

export default Order;
