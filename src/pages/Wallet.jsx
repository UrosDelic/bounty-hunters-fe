import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { WalletTable } from '../components';
import { testData } from './TestData';

function Wallet() {
  return (
    <Box margin="auto" color="white">
      <Flex minW="700px" marginTop="30px" marginBottom="50px" padding="10px">
        <Text marginBottom="10px">Your current number of points is</Text>
        <Heading marginBottom="20px">230</Heading>
        <Box>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            width="330px"
            backgroundColor="#32CC4C"
            padding="5px 10px"
            borderRadius="5px"
            marginBottom="10px"
          >
            <Text textTransform="uppercase" color="white">
              Points gained
            </Text>
            <Text>500</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            width="330px"
            backgroundColor="#E14A39"
            padding="5px 10px"
            borderRadius="5px"
          >
            <Text textTransform="uppercase" color="white">
              Points spent
            </Text>
            <Text>270</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex justifyContent="space-around">
        <WalletTable />
        <WalletTable />
      </Flex>
    </Box>
  );
}

export default Wallet;
