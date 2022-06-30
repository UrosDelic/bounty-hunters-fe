import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ProductMedia } from '../types/index';

type StoreItemProps = {
  id: string;
  name: string;
  price: number;
  productMedia: ProductMedia[];
};

function StoreItem({ id, name, price, productMedia }: StoreItemProps) {
  const defaultImage =
    'https://cdn.shopify.com/s/files/1/0665/2889/products/Image-1-The-Weekend-Boot-Allegra-Alice_Whittles-2000x2000_1280x.jpg?v=1632758527';

  return (
    <Link as={RouterLink} to={`/store/${id}`} _focus={{ outline: 0 }}>
      <Flex direction="column" height="100%">
        <Flex width="100%" flex={1} direction="column" justifyContent="center">
          <Image
            src={productMedia[0]?.url || defaultImage}
            alt={name}
            margin="auto"
            width="100%"
            cursor="pointer"
            _hover={{ transform: 'scaleY(1.05)' }}
          />
        </Flex>
        <Box width="100%" textAlign="left" padding="10px 0px">
          <Text fontSize="20px">{name}</Text>
          <Text fontSize="17px">Points needed: {price}</Text>
        </Box>
      </Flex>
    </Link>
  );
}

export default StoreItem;
