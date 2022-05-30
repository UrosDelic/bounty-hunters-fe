import { Flex, Box, Text, Image, Avatar } from '@chakra-ui/react';

type SingleOrderProps = {
  id: number;
  name: string;
  image?: React.ReactNode | any;
  points: number;
  status: string;
  date?: string;
  shippingAdress?: string;
};

function SingleOrder({
  id,
  name,
  image,
  points,
  status,
  date,
  shippingAdress,
}: SingleOrderProps) {
  return (
    <Flex margin="auto" width="fit-content" direction="column" height="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="20px">`Order #{id}`</Text>
          <Text color="myOrders.lightGray">{date}</Text>
        </Box>
        <Avatar name="Vuk" backgroundColor="myOrders.lightGray" />
      </Flex>
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
      <Box
        color={status}
        borderColor={status}
        border="1px solid"
        borderRadius="5px"
        padding="8px"
        textTransform="uppercase"
        width="100%"
        textAlign="center"
        marginTop="auto"
      >
        {status}
      </Box>
    </Flex>
  );
}

export default SingleOrder;
