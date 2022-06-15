import { Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box } from '@chakra-ui/react';

type headerProps = {
  onOpen: any;
};

function Header({ onOpen }: headerProps) {
  return (
    <Flex
      minH="6vh"
      alignItems="center"
      bg="gray.500"
      color="white"
      padding="10px 15px"
      justifyContent="space-between"
      position="fixed"
      zIndex={2}
      w="100%"
    >
      <HamburgerIcon cursor="pointer" w={8} h={8} onClick={onOpen} />


    </Flex>
  );
}

export default Header;
