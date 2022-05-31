import { Box, Flex, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { WalletTable, SumOfPoints } from '../components/index';
import { gainedPoints, spentPoints } from '../testData/TestData';

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
    <Box maxWidth="1200px" margin="auto" padding="0px 25px 25px 25px">
      <Flex
        flexDirection="column"
        alignItems="center"
        marginTop="30px"
        marginBottom="80px"
        padding="10px"
      >
        <Text marginBottom="10px">Your current number of points is</Text>
        <Heading marginBottom="20px">
          {sumOfGainedPoints - sumOfSpentPoints}
        </Heading>
        <Box>
          <SumOfPoints
            text="Points gained"
            color="wallet.green"
            sum={sumOfGainedPoints}
          />
          <SumOfPoints
            text="Points spent"
            color="wallet.red"
            sum={sumOfSpentPoints}
          />
        </Box>
      </Flex>
      <Grid
        templateColumns={['none', 'none', 'repeat(2, 1fr)']}
        gap={10}
        width="100%"
      >
        <GridItem>
          <WalletTable
            data={gainedPoints}
            headers={['task', 'points', 'date']}
            title="Tasks you got points for"
          />
        </GridItem>
        <GridItem>
          <WalletTable
            data={spentPoints}
            headers={['product', 'points', 'date']}
            title="Products you spent points on"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Wallet;
