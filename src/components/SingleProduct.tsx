import {
  Box,
  Text,
  Flex,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { StyledCard } from './index';
import { useState } from 'react';
import { ProductStatus } from '../types';
import ProductsStore from '../stores/products';
import { Link as RouteLink } from 'react-router-dom';

type SingleCardProps = {
  id: string;
  name: string;
  price: number;
  status: ProductStatus;
};

function SingleProduct({ id, name, price, status }: SingleCardProps) {
  const [productStatus, setProductStatus] = useState(status);
  const borderColor =
    productStatus === ProductStatus.INACTIVE ? 'main.gray' : '';
  const backgroundColor =
    productStatus === ProductStatus.INACTIVE ? 'main.violet' : 'main.green';

  function changeStatus() {
    if (productStatus === ProductStatus.ACTIVE) {
      ProductsStore.setInactiveStatus(id);
      setProductStatus(ProductStatus.INACTIVE);
    } else {
      ProductsStore.setActiveStatus(id);
      setProductStatus(ProductStatus.ACTIVE);
    }
  }

  return (
    <StyledCard>
      <Flex
        direction="column"
        padding="15px 25px"
        position="relative"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <Link as={RouteLink} to={`/products/${id}`}>
          <Text
            position="absolute"
            top="10px"
            right="10px"
            _hover={{ fontWeight: 'bold' }}
          >
            Details
          </Text>
        </Link>
        <Box marginBottom="25px">
          <Heading fontSize="18px">{name}</Heading>
          <Text fontSize="16px">{price} points</Text>
        </Box>
        <ButtonGroup>
          <Button
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            onClick={changeStatus}
            _focus={{ outline: 'none' }}
          >
            Set as{' '}
            {productStatus === ProductStatus.INACTIVE ? 'active' : 'inactive'}
          </Button>
        </ButtonGroup>
      </Flex>
    </StyledCard>
  );
}

export default SingleProduct;
