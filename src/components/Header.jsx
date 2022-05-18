import { Flex, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Flex
      minH="8vh"
      alignItems="center"
      backgroundColor="black"
      color="white"
      padding="10px 15px"
      justifyContent="space-between"
    >
      <Heading as="h3">Quantox</Heading>
    </Flex>
  );
}

export default Header;
