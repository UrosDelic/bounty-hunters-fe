import {
  SingleProduct,
  SpinnerLoader,
  FetchingError,
} from '../components/index';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import ProductsService from '../services/products';

type ProductProps = {
  id: string;
  name: string;
  price: number;
  status: Status;
};

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

function Products() {
  const service = new ProductsService();
  const { data, isLoading, isError, isSuccess } = useQuery(['products'], () =>
    service.getProducts()
  );

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (isError) {
    return <FetchingError />;
  }

  return (
    <Box maxW="1200px" margin="auto" marginTop="50px" padding="0px 25px 25px">
      {isSuccess &&
        data?.data?.products.map((product: ProductProps) => {
          const { id, name, price, status } = product;
          return (
            <SingleProduct key={id} name={name} price={price} status={status} />
          );
        })}
    </Box>
  );
}

export default Products;
