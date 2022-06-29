import { Heading, Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { StoreItem, SpinnerLoader, SearchByInput } from '../components/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductsStore from '../stores/products';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { ProductStatus } from 'types/index';

function Store() {
  const { loading, success, products, hasMore } = ProductsStore;

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
          <Heading
            as="h1"
            textAlign="center"
            marginTop="50px"
            marginBottom="50px"
          >
            Available products
          </Heading>
          <Box marginBottom="50px">
            <SearchByInput />
          </Box>
          <InfiniteScroll
            dataLength={products.length}
            next={() => ProductsStore.loadMoreProducts()}
            hasMore={hasMore}
            loader={<Text marginTop={1}>loading...</Text>}
          >
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(3, 1fr)',
                'repeat(4, 1fr)',
              ]}
              gap={4}
            >
              {products
                .filter(product => product.status === ProductStatus.ACTIVE)
                .map(product => {
                  const { id } = product;
                  return (
                    <GridItem key={id}>
                      <StoreItem {...product} />
                    </GridItem>
                  );
                })}
            </Grid>
          </InfiniteScroll>
        </Box>
      )}
    </>
  );
}

export default observer(Store);
