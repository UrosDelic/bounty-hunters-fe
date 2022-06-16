import { Grid, GridItem } from '@chakra-ui/react';
import { Order, SpinnerLoader } from '../components/index';
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
    <Grid
      maxW="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px 25px"
      templateColumns={[
        'repeat(1, minmax(240px, 400px))',
        'repeat(1, minmax(240px, 400px))',
        'repeat(2, minmax(240px, 360px))',
        'repeat(3, minmax(240px, 360px))',
      ]}
      gap={6}
      width="fit-content"
    >
      {success &&
        orders.map(order => {
          const { id } = order;
          return (
            <GridItem key={id}>
              <Order {...order} />
            </GridItem>
          );
        })}
    </Grid>
  );
}

export default observer(Orders);
