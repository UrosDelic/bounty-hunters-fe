import { Box } from '@chakra-ui/react';
import {
  SpinnerLoader,
  SingleOrder,
  HorizontalCard,
} from '../components/index';
import MyOrdersStore from '../stores/myOrders';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

function MyOrders() {
  const { loading, success, myOrders } = MyOrdersStore;

  useEffect(() => {
    MyOrdersStore.getMyOrders();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box margin="auto" maxW="1200px" marginTop="50px" padding="0px 25px 25px">
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
          return (
            <Box marginBottom="15px">
              <HorizontalCard>
                <SingleOrder key={id} {...singleOrderValues} />
              </HorizontalCard>
            </Box>
          );
        })}
    </Box>
  );
}

export default observer(MyOrders);
