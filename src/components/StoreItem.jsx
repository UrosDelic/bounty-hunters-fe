import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function StoreItem({ id, name, image, points }) {
  return (
    <Flex direction="column" alignItems="center">
      <Link as={RouterLink} to={`/store/${id}`} width="100%">
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
