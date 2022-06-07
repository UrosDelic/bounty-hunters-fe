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
    <Flex direction="column" alignItems="center">
      <Link
        as={RouterLink}
        to={`/store/${id}`}
        width="100%"
        _focus={{ outline: 0 }}
      >
        <Image
          src={image}
          alt={name}
          margin="auto"
          width="170px"
          height="240px"
          cursor="pointer"
        />
      </Link>
      <Box
        width="100%"
        textAlign="left"
        padding="10px"
        backgroundColor="main.violet"
      >
        <Text fontSize="20px">{name}</Text>
        <Text fontSize="17px">Points needed: {points}</Text>
      </Box>
    </Flex>
  );
}

export default StoreItem;
