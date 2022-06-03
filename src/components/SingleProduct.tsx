import {
  Box,
  Text,
  Flex,
  ButtonGroup,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ProductStatus } from '../types';

type SingleCardProps = {
  name: string;
  price: number;
  status: ProductStatus;
};

function SingleProduct({ name, price, status }: SingleCardProps) {
  const [productStatus, setProductStatus] = useState(status);
  const borderColor =
    productStatus === ProductStatus.INACTIVE ? 'main.gray' : '';
  const backgroundColor =
    productStatus === ProductStatus.INACTIVE ? '' : 'main.green';

  function changeStatus() {
    if (productStatus === ProductStatus.ACTIVE) {
      setProductStatus(ProductStatus.INACTIVE);
    } else {
      setProductStatus(ProductStatus.ACTIVE);
    }
  }

  return (
    <Flex
      direction={['column', 'row', 'row', 'row']}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid"
      borderColor="main.gray"
      padding="20px 24px"
    >
      <Box>
        <Heading fontSize="18px">{name}</Heading>
        <Text fontSize="14px">{price} points</Text>
      </Box>
      <ButtonGroup>
        <Button
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          onClick={changeStatus}
        >
          Set as{' '}
          {productStatus === ProductStatus.INACTIVE ? 'active' : 'inactive'}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default SingleProduct;
