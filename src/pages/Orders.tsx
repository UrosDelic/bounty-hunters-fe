import { Grid, GridItem, Box, Text } from '@chakra-ui/react';
import { Order, SpinnerLoader, SearchByInput } from '../components/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import OrdersStore from '../stores/orders';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

function Orders() {
  const { loading, success, orders, hasMore } = OrdersStore;

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
      width="fit-content"
    >
      <Box marginBottom="50px">
        <SearchByInput />
      </Box>
      <InfiniteScroll
        dataLength={orders.length}
        next={() => OrdersStore.loadMoreOrders()}
        hasMore={hasMore}
        loader={<Text marginTop="15px">loading...</Text>}
      >
        <Grid
          margin="auto"
          templateColumns={[
            'repeat(1, minmax(260px, 400px))',
            'repeat(1, minmax(300px, 450px))',
            'repeat(2, minmax(240px, 360px))',
            'repeat(3, minmax(240px, 360px))',
          ]}
          gap={5}
          p={2}
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
      </InfiniteScroll>
    </Box>
  );
}

export default observer(Orders);
