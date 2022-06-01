import { Box } from '@chakra-ui/react';
import { Order } from '../components/index';
import OrdersService from '../services/orders';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { SpinnerLoader, FetchingError } from '../components/index';
import { Status } from '../testData/TestData';

type OrderProps = {
  id: string;
  createdAt: string;
  status: string;
};

function Orders() {
  const service = new OrdersService();
  const { data, isLoading, isError, isSuccess } = useQuery(['orders'], () =>
    service.getOrders()
  );

  useEffect(() => {
    console.log(data);
  }, [isSuccess]);

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
        data.map((order: OrderProps) => {
          const { id } = order;
          return <Order key={id} {...order} />;
        })}
    </Box>
  );
}

export default Orders;
