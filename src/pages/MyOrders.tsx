import { Box, Text } from '@chakra-ui/react';
import { SpinnerLoader, SingleOrder, SearchByInput } from '../components/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import MyOrdersStore from '../stores/myOrders';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

function MyOrders() {
  const { loading, success, myOrders, hasMore } = MyOrdersStore;

  useEffect(() => {
    MyOrdersStore.getMyOrders();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box margin="auto" maxW="1200px" marginTop="50px" padding="0px 25px 25px">
      <Box marginBottom="25px">
        <SearchByInput />
      </Box>
      <InfiniteScroll
        dataLength={myOrders.length}
        next={() => MyOrdersStore.loadMoreOrders()}
        hasMore={hasMore}
        loader={<Text marginTop={1}>loading...</Text>}
      >
        <Box p={2}>
          {success &&
            myOrders.map(order => {
              const {
                id,
                createdAt,
                shippingAddress,
                status,
                productAttributesOrder,
              } = order;
              const product = productAttributesOrder[0].product;
              const { name, price } = product;
              const singleOrderValues = {
                createdAt,
                shippingAddress,
                status,
                name,
                price,
              };
              return <SingleOrder key={id} {...singleOrderValues} />;
            })}
        </Box>
      </InfiniteScroll>
    </Box>
  );
}

export default observer(MyOrders);
