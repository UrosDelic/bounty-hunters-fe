import { Flex, Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Orders } from 'types';
import axios from 'axios';
import { useEffect } from 'react';

function SingleOrder({
  createdAt,
  updatedAt,
  shippingAddress,
  status,
  userId,
}: Orders) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid gray"
      padding="10px"
    >
      <Box>
        <Text>{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
        <Text>{shippingAddress}</Text>
      </Box>
    </Flex>
  );
}

export default SingleOrder;
