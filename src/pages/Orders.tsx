import { Grid, GridItem, Box } from '@chakra-ui/react';
import { Order, SpinnerLoader, SearchByInput } from '../components/index';
import OrdersStore from '../stores/orders';
import { useEffect } from 'react';
import { useFilterBySearch } from '../custom-hooks/useFilterBySearch';
import { observer } from 'mobx-react';

function Orders() {
  const { loading, success, orders } = OrdersStore;
  const filteredOrders = useFilterBySearch(orders, [
    'shippingAddress',
    'createdAt',
  ]);

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
      <Box marginBottom="50px">
        <SearchByInput />
      </Box>
      <Grid
        margin="auto"
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
          filteredOrders.map(order => {
            const { id } = order;
            return (
              <GridItem key={id}>
                <Order {...order} />
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}

export default observer(Orders);
