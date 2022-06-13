import { Flex, Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

interface SingleOrderProps {
  createdAt: string;
  shippingAddress: string;
  status: string;
  name: string;
  price: number;
}

function SingleOrder({
  createdAt,
  shippingAddress,
  status,
  name,
  price,
}: SingleOrderProps) {
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
        <Text>{status}</Text>
        <Text>{name}</Text>
        <Text>{price} points</Text>
      </Box>
    </Flex>
  );
}

export default SingleOrder;
