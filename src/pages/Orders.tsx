import { Box } from '@chakra-ui/react';
import { Order } from '../components/index';
import OrdersService from '../services/orders';
import { useQuery } from 'react-query';
import { SpinnerLoader, FetchingError } from '../components/index';

function Orders() {
  const service = new OrdersService();
  const { data, isLoading, isError, isSuccess } = useQuery(['orders'], () =>
    service.getOrders()
  );

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (isError) {
    return <FetchingError />;
  }

  return (
    <Box
      maxW="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px 25px"
    >
      {isSuccess &&
        data?.data?.map(order => {
          const { id } = order;
          return <Order key={id} {...order} />;
        })}
    </Box>
  );
}

export default Orders;
