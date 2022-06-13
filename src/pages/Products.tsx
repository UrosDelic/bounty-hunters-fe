import { SingleProduct, SpinnerLoader } from '../components/index';
import { Box } from '@chakra-ui/react';
import ProductsStore from '../stores/products';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function Products() {
  const { loading, success, isStatusChanged, products } = ProductsStore;

  useEffect(() => {
    ProductsStore.getProducts();
  }, [isStatusChanged]);

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
          {products.map(product => {
            const { id, name, price, status } = product;
            return (
              <SingleProduct
                key={id}
                id={id}
                name={name}
                price={price}
                status={status}
              />
            );
          })}
        </Box>
      )}
    </>
  );
}

export default observer(Products);
