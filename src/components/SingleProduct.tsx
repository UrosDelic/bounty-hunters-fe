import {
  Box,
  Text,
  Flex,
  ButtonGroup,
  Button,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { StyledCard, ProductsDrawer } from './index';
import { useState } from 'react';
import { ProductStatus, ProductMedia } from '../types';
import ProductsStore from '../stores/products';

type SingleProductProps = {
  id: string;
  name: string;
  price: number;
  status: ProductStatus;
  description: string;
  image: string;
};

function SingleProduct({
  id,
  name,
  price,
  status,
  description,
  image,
}: SingleProductProps) {
  const [productStatus, setProductStatus] = useState(status);
  const borderColor =
    productStatus === ProductStatus.INACTIVE ? 'main.gray' : '';
  const backgroundColor =
    productStatus === ProductStatus.INACTIVE ? 'main.violet' : 'main.green';
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <>
      <StyledCard>
        <Flex
          direction="column"
          padding="15px 25px"
          position="relative"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          <Text
            position="absolute"
            top="10px"
            right="10px"
            cursor="pointer"
            _hover={{ fontWeight: 'bold' }}
            onClick={onOpen}
          >
            Edit
          </Text>
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
      <ProductsDrawer
        productId={id}
        name={name}
        price={price}
        description={description}
        image={image}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default SingleProduct;
