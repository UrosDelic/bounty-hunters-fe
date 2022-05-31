import { SingleProduct, SpinnerLoader } from '../components/index';
import { Box, Heading } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import ProductsService from '../services/products';

function Products() {
  const service = new ProductsService();
  const { data, isLoading, isError, isSuccess } = useQuery(['products'], () =>
    service.getProducts()
  );

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (isError) {
    return <Heading>Error happened.</Heading>;
  }

  return (
    <Box maxW="1200px" margin="auto" marginTop="50px" padding="0px 25px 25px">
      {isSuccess &&
        data?.data?.products.map((product: any) => {
          const { id, name, price, status } = product;
          return (
            <SingleProduct key={id} name={name} price={price} status={status} />
          );
        })}
    </Box>
  );
}

export default Products;
