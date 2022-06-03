import { Box, Flex } from '@chakra-ui/react';
import { gainedPoints, spentPoints } from '../testData/TestData';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import {
  DoughnutChart,
  PointBreakdown,
  TransactionTable,
} from '../components/index';

function Wallet() {
  const sumOfGainedPoints = gainedPoints.reduce(
    (acc, current) => acc + current.points,
    0
  );
  const sumOfSpentPoints = spentPoints.reduce(
    (acc, current) => acc + current.points,
    0
  );

  return (
    <Box
      maxWidth="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px 25px"
    >
      <Flex justifyContent="center" alignItems="center" marginBottom="80px">
        <Flex alignItems="center" marginRight="20px">
          <DoughnutChart iconName={ArrowUpIcon} primaryColor="#38A169" />
          <PointBreakdown name="Gained points" number={sumOfGainedPoints} />
        </Flex>
        <Flex alignItems="center" marginRight="20px">
          <DoughnutChart iconName={ArrowDownIcon} primaryColor="#B794F4" />
          <PointBreakdown name="Spent points" number={sumOfSpentPoints} />
        </Flex>
        <PointBreakdown
          name="Balance"
          number={sumOfGainedPoints - sumOfSpentPoints}
        />
      </Flex>
      <TransactionTable data={gainedPoints} />
    </Box>
  );
}

export default Wallet;
