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

function ProductDetails() {
  // const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  // const colors = ['productDetails.black', 'productDetails.white'];
  const { id } = useParams();
  const { loading, success, productById } = ProductsStore;

  useEffect(() => {
    ProductsStore.getProductById(id);
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      {success && (
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
              <SizeGroup />
              <ColorGroup />
              <Button marginTop="20px" width="100px">
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
