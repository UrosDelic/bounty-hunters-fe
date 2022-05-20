import { Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box } from '@chakra-ui/react';

function Header({ onOpen }) {
  return (
    <Flex
      minH="8vh"
      alignItems="center"
      backgroundColor="black"
      color="white"
      bg="purple.300"
      padding="10px 15px"
      justifyContent="space-between"
    >
      <HamburgerIcon cursor="pointer" w={8} h={8} onClick={onOpen} />

      <Box>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  );
}

export default Header;
