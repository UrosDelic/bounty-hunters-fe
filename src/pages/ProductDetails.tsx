import {
  Heading,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import { SizeGroup, ColorGroup, SpinnerLoader } from '../components/index';
import shirt from '../img/shirt.jpg';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import ProductsStore from '../stores/products';
import AttributeValuesStore from '../stores/attributeValues';

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
  } = AttributeValuesStore;

  function makeAnOrder() {}

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
            <Heading as="h1" size="xl" marginBottom={4}>
              {productById?.name}
            </Heading>
            <Heading as="h3" size="md" marginBottom={4}>
              {productById?.price} points
            </Heading>
            <Text marginBottom={4}>{productById?.description}</Text>
            <Flex flexDirection="column">
              <SizeGroup sizeArr={sizeData} />
              <ColorGroup colorArr={colorData} />
              <Button
                marginTop="20px"
                width="100px"
                backgroundColor="purple"
                minW="180px"
              >
                Checkout
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default observer(ProductDetails);
