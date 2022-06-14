import { Heading, Box, Grid, GridItem } from '@chakra-ui/react';
import { StoreItem, SpinnerLoader } from '../components/index';
// import { productsList } from '../testData/TestData';
import ProductsStore from '../stores/products';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function Store() {
  const { loading, success, products } = ProductsStore;

  useEffect(() => {
    ProductsStore.getProducts();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      {success && (
        <Box
          maxW="1200px"
          margin="auto"
          padding="0px 25px 25px"
          boxSizing="border-box"
        >
          <Heading as="h1" textAlign="center" marginTop="50px">
            Available products
          </Heading>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={4}
            marginTop="50px"
          >
            {products.map(product => {
              const { id } = product;
              return (
                <GridItem key={id}>
                  <StoreItem {...product} />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default observer(Store);
