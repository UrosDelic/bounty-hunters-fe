import { Box } from '@chakra-ui/react';
// import { ordersList } from '../testData/TestData';
import { SpinnerLoader, SingleOrder } from '../components/index';
import OrdersStore from '../stores/orders';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

function MyOrders() {
  const { loading, success, orders } = OrdersStore;

  useEffect(() => {
    OrdersStore.getOrders();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box margin="auto" maxW="1200px" marginTop="50px" padding="0px 25px 25px">
      {success &&
        orders.map(order => {
          const { id } = order;
          return <SingleOrder key={id} {...order} />;
        })}
      {/* <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={4}
        columnGap={4}
        rowGap={6}
      >
        {ordersList.map(order => {
          const { id } = order;
          return (
            <GridItem key={id}>
              <SingleOrder {...order} />
            </GridItem>
          );
        })}
      </Grid> */}
    </Box>
  );
}

export default observer(MyOrders);
