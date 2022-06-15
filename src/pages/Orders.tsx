import { Box } from '@chakra-ui/react';
import { Order, SpinnerLoader, HorizontalCard } from '../components/index';
import OrdersStore from '../stores/orders';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

function Orders() {
  const { loading, success, orders } = OrdersStore;

  useEffect(() => {
    OrdersStore.getOrders();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box
      maxW="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px 25px"
    >
      {success &&
        orders.map(order => {
          const { id } = order;
          return (
            <Box key={id} marginBottom="20px">
              <HorizontalCard>
                <Order {...order} />
              </HorizontalCard>
            </Box>
          );
        })}
    </Box>
  );
}

export default observer(Orders);
