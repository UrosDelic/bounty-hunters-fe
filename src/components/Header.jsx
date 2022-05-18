import { Flex, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Flex minH="8vh" alignItems="center" backgroundColor="black" color="white">
      <Heading as="h3">This is a header</Heading>
    </Flex>
  );
}

export default Header;
