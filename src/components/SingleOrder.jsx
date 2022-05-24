import { Flex, Box, Text, Image } from '@chakra-ui/react';

function SingleOrder({
  id,
  name,
  image,
  points,
  status,
  date,
  shippingAdress,
}) {
  const statusColor = {
    pending: 'myOrders.violet',
    'in progress': 'myOrders.yellow',
    fulfilled: 'myOrders.green',
  };

  return (
    <Flex margin="auto" direction="column" height="100%">
      <Box>
        <Text fontSize="20px">Order #{id}</Text>
        <Text color="myOrders.lightGray">{date}</Text>
      </Box>
      <Flex marginBottom="8px" marginTop="8px">
        <Image
          src={image}
          alt={image}
          width="80px"
          height="80px"
          padding="5px"
        />
        <Box>
          <Text fontSize="20px">{name}</Text>
          <Text color="myOrders.lightGray">{shippingAdress}</Text>
          <Text>Points: {points}</Text>
        </Box>
      </Flex>
      <Flex alignItems="center" marginTop="auto">
        {/* <Text>{points}</Text> */}
        <Box
          color={statusColor[status]}
          borderColor={statusColor[status]}
          border="1px solid"
          borderRadius="5px"
          padding="8px"
          textTransform="uppercase"
          width="100%"
          textAlign="center"
        >
          {status}
        </Box>
      </Flex>
    </Flex>
  );
}

export default SingleOrder;
