import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { gainedPoints, spentPoints } from '../testData/TestData';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import {
  DoughnutChart,
  PointBreakdown,
  TransactionTable,
  BarChart,
} from '../components/index';
import { useUniqueDates } from '../custom-hooks/useUniqueDates';

function Wallet() {
  const sumOfGainedPoints = gainedPoints.reduce(
    (acc, current) => acc + current.points,
    0
  );
  const sumOfSpentPoints = spentPoints.reduce(
    (acc, current) => acc + current.points,
    0
  );
  const dateObj = useUniqueDates(gainedPoints, spentPoints);

  return (
    <Box
      maxWidth="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px 25px"
    >
      {/* <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        maxWidth="fit-content"
        margin="auto"
        marginBottom="80px"
        rowGap={4}
      >
        <GridItem>
          <PointBreakdown name="Gained points" number={sumOfGainedPoints}>
            <DoughnutChart iconName={ArrowUpIcon} primaryColor="#38A169" />
          </PointBreakdown>
        </GridItem>
        <GridItem>
          <PointBreakdown name="Spent points" number={sumOfSpentPoints}>
            <DoughnutChart iconName={ArrowDownIcon} primaryColor="#B794F4" />
          </PointBreakdown>
        </GridItem>
        <GridItem>
          <PointBreakdown
            name="Balance"
            number={sumOfGainedPoints - sumOfSpentPoints}
          />
        </GridItem>
      </Grid> */}
      <Flex
        justifyContent="center"
        alignItems={['flex-start', 'center']}
        marginBottom="80px"
        direction={['column', 'row']}
      >
        <PointBreakdown name="Gained points" number={sumOfGainedPoints}>
          <DoughnutChart iconName={ArrowUpIcon} primaryColor="#38A169" />
        </PointBreakdown>
        <PointBreakdown name="Spent points" number={sumOfSpentPoints}>
          <DoughnutChart iconName={ArrowDownIcon} primaryColor="#B794F4" />
        </PointBreakdown>
        <PointBreakdown
          name="Balance"
          number={sumOfGainedPoints - sumOfSpentPoints}
        />
      </Flex>
      <BarChart dateObj={dateObj} />
      <Flex justifyContent="center">
        <TransactionTable data={gainedPoints} />
        <TransactionTable data={spentPoints} />
      </Flex>
    </Box>
  );
}

export default Wallet;
