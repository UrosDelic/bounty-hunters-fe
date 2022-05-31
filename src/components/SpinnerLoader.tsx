import { Spinner, Flex } from '@chakra-ui/react';

function SpinnerLoader() {
  return (
    <Flex justifyContent="center">
      <Spinner size="xl" thickness="5px" marginTop="50px" />
    </Flex>
  );
}

export default SpinnerLoader;
