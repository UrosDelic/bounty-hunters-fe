import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type StoreItemProps = {
  id: number;
  name: string;
  image: string;
  points: number;
};

function StoreItem({ id, name, image, points }: StoreItemProps) {
  return (
    <Link as={RouterLink} to={`/store/${id}`} _focus={{ outline: 0 }}>
      <Flex direction="column" height="100%">
        <Flex width="100%" flex={1} direction="column" justifyContent="center">
          <Image
            src={image}
            alt={name}
            margin="auto"
            width="100%"
            cursor="pointer"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </Flex>
        <Box width="100%" textAlign="left" padding="10px 0px">
          <Text fontSize="20px">{name}</Text>
          <Text fontSize="17px">Points needed: {points}</Text>
        </Box>
      </Flex>
    </Link>
  );
}

export default StoreItem;
