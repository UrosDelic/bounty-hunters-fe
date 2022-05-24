import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ordersList } from '../testData/TestData';
import { SingleOrder } from '../components/index';

function MyOrders() {
  return (
    <Box margin="auto" width="70%" marginTop="50px" marginBottom="30px">
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={4}
      >
        {ordersList.map(order => {
          const { id } = order;
          return (
            <GridItem key={id}>
              <SingleOrder {...order} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default MyOrders;
