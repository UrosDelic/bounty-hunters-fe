import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Order, SpinnerLoader, StyledCard } from '../components/index';
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
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(3, 1fr)',
      ]}
      gap={6}
    >
      {success &&
        orders.map(order => {
          const { id } = order;
          return (
            <GridItem key={id}>
              <StyledCard>
                <Order {...order} />
              </StyledCard>
            </GridItem>
          );
        })}
    </Grid>
  );
}

export default observer(Orders);
