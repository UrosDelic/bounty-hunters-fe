import {
  Heading,
  Flex,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  Input,
} from '@chakra-ui/react';
import { SizeGroup, ColorGroup, SpinnerLoader } from '../components/index';
import shirt from '../img/shirt.jpg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import ProductsStore from '../stores/products';
import AttributeValuesStore from '../stores/attributeValues';
import OrdersStore from '../stores/orders';

function ProductDetails() {
  const { id } = useParams();
  const {
    loading: productLoading,
    success: productSuccess,
    productById,
  } = ProductsStore;
  const {
    loading: attributeLoading,
    success: attributeSuccess,
    sizeData,
    colorData,
    selectedColor,
    selectedSize,
  } = AttributeValuesStore;
  const [address, setAddress] = useState('');

  function makeAnOrder() {
    if (address.trim()) {
      const orderObject = {
        userId: 'a0d6132d-9c7d-46fa-a3b8-1e20d918d605',
        shippingAddress: address,
        productId: id,
        attributeValueIds: [selectedSize, selectedColor],
      };
      OrdersStore.makeAnOrder(orderObject);
    }
  }

  useEffect(() => {
    ProductsStore.getProductById(id);
    AttributeValuesStore.getAttributeValues();
  }, []);

  if (productLoading || attributeLoading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      {productSuccess && attributeSuccess && (
        <Grid
          templateColumns={['none', 'none', 'none', 'repeat(2, 1fr)']}
          gap={5}
          maxW="1200px"
          margin="auto"
          marginTop="50px"
          padding="0px 25px 25px"
        >
          <GridItem padding="10px" borderRadius="5px">
            <Image src={shirt} margin="auto" width="100%" />
          </GridItem>
          <GridItem padding="10px" borderRadius="5px">
            {/* <Flex flexDirection="column" height="100%"> */}
            <Heading as="h1" size="xl" marginBottom={4}>
              {productById?.name}
            </Heading>
            <Heading as="h3" size="md" marginBottom={4}>
              {productById?.price} points
            </Heading>
            <Text marginBottom={4}>{productById?.description}</Text>
            <Box marginBottom="40px">
              <SizeGroup sizeArr={sizeData} />
              <ColorGroup colorArr={colorData} />
            </Box>
            <Box marginTop="auto">
              <Input
                variant="flushed"
                placeholder="Enter shipping address..."
                focusBorderColor="purple"
                maxW="400px"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <Button
                marginTop="20px"
                width="100px"
                backgroundColor="purple"
                minW="180px"
                onClick={makeAnOrder}
              >
                Checkout
              </Button>
            </Box>
            {/* </Flex> */}
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default observer(ProductDetails);
