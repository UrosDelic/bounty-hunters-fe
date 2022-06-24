import {
  SingleProduct,
  SpinnerLoader,
  SearchByInput,
} from '../components/index';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductsStore from '../stores/products';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function Products() {
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
          marginTop="50px"
          padding="0px 25px 25px"
          width="fit-content"
        >
          <Box marginBottom="50px">
            <SearchByInput />
          </Box>
          <InfiniteScroll
            dataLength={products.length}
            next={() => ProductsStore.loadMoreProducts()}
            hasMore={hasMore}
            loader={<Text margin="15px 0px 0px 15px">loading...</Text>}
          >
            <Grid
              p={2}
              templateColumns={[
                'repeat(1, minmax(260px, 400px))',
                'repeat(1, minmax(300px, 400px))',
                'repeat(2, minmax(240px, 360px))',
                'repeat(3, minmax(240px, 360px))',
              ]}
              gap={6}
              width="fit-content"
              margin="auto"
            >
              {products.map(product => {
                const { id, name, price, status } = product;
                return (
                  <GridItem>
                    <SingleProduct
                      key={id}
                      id={id}
                      name={name}
                      price={price}
                      status={status}
                    />
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

export default observer(Products);
