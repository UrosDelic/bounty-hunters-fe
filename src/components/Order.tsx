import { Box, Text, Select, Heading, Flex } from '@chakra-ui/react';
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { StyledCard } from './index';
import { ChangeEvent, useState } from 'react';
import OrdersStore from '../stores/orders';
import { Orders } from '../types/orders';
import dayjs from 'dayjs';

function Order({ id, createdAt, status, shippingAddress, user }: Orders) {
  const [statusValue, setStatusValue] = useState(status);
  const { firstName, lastName } = user;

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
          <Heading fontSize="18px">{`${firstName} ${lastName}`}</Heading>
          <Flex
            justifyContent={['space-between']}
            direction={['column', 'row', 'column', 'column']}
          >
            <Text fontSize="14px">{`Address: ${shippingAddress}`}</Text>
            <Text fontSize="14px">{`Date: ${dayjs(createdAt).format(
              'DD/MM/YYYY'
            )}`}</Text>
          </Flex>
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
          cursor={statusValue === 'FULFILLED' ? 'arrow' : 'pointer'}
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
