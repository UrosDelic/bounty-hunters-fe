import {
  SingleProduct,
  SpinnerLoader,
  SearchByInput,
} from '../components/index';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProductsStore from '../stores/products';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useFilterBySearch } from '../custom-hooks/useFilterBySearch';

function Products() {
  const { loading, success, products } = ProductsStore;
  const filteredProducts = useFilterBySearch(products, ['name']);

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
        >
          <Box marginBottom="50px">
            <SearchByInput />
          </Box>
          <Grid
            templateColumns={[
              'repeat(1, minmax(240px, 360px))',
              'repeat(1, minmax(240px, 360px))',
              'repeat(2, minmax(240px, 360px))',
              'repeat(3, minmax(240px, 360px))',
            ]}
            gap={6}
            width="fit-content"
            margin="auto"
          >
            {filteredProducts.map(product => {
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
        </Box>
      )}
    </>
  );
}

export default observer(Products);
