import { Box } from '@chakra-ui/react';
import { ordersList } from '../testData/TestData';
import { Order } from '../components/index';

function Orders() {
  return (
    <Box
      maxW="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px 25px"
    >
      {ordersList.map(product => {
        const { id, name, date, status } = product;
        return <Order key={id} name={name} date={date} status={status} />;
      })}
    </Box>
  );
}

export default Orders;
