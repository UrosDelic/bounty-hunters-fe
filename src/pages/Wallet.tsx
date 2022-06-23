import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import {
  DoughnutChart,
  PointBreakdown,
  TransactionTable,
  BarChart,
  SpinnerLoader,
} from '../components/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useUniqueDates } from '../custom-hooks/useUniqueDates';
import WalletStore from '../stores/wallet';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

function Wallet() {
  const {
    loading,
    success,
    orders,
    tasks,
    totalPoints,
    totalPrice,
    ordersHasMore,
    tasksHasMore,
  } = WalletStore;

  const dateObj = useUniqueDates(tasks, orders);

  useEffect(() => {
    WalletStore.getOrders();
    WalletStore.getTasks();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      {success && (
        <Box
          maxWidth="1200px"
          margin="auto"
          marginTop="50px"
          padding="0px 25px 25px 25px"
        >
          <Grid
            templateColumns={['repeat(1, 1fr)', '3fr 3fr 2fr']}
            maxWidth="fit-content"
            margin="auto"
            marginBottom="80px"
            rowGap={4}
          >
            <GridItem>
              <PointBreakdown name="Gained points" number={totalPoints}>
                <DoughnutChart iconName={ArrowUpIcon} primaryColor="#38A169" />
              </PointBreakdown>
            </GridItem>
            <GridItem>
              <PointBreakdown name="Spent points" number={totalPrice}>
                <DoughnutChart
                  iconName={ArrowDownIcon}
                  primaryColor="#B794F4"
                />
              </PointBreakdown>
            </GridItem>
            <GridItem>
              <PointBreakdown
                name="Balance"
                number={totalPoints - totalPrice}
              />
            </GridItem>
          </Grid>
          <BarChart dateObj={dateObj} />
          <Flex
            justifyContent="center"
            direction={['column', 'column', 'row']}
            marginTop="100px"
          >
            <InfiniteScroll
              dataLength={orders.length}
              next={() => WalletStore.loadMoreOrders()}
              hasMore={ordersHasMore}
              loader={<h3>loading...</h3>}
            >
              <TransactionTable transaction="orders" data={orders} />
            </InfiniteScroll>
            <InfiniteScroll
              dataLength={tasks.length}
              next={() => WalletStore.loadMoreTasks()}
              hasMore={tasksHasMore}
              loader={<h3>loading...</h3>}
            >
              <TransactionTable transaction="tasks" data={tasks} />
            </InfiniteScroll>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default observer(Wallet);
