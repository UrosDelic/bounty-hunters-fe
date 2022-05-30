import { Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box } from '@chakra-ui/react';

type headerProps = {
  onOpen: any,
} 

function Header({ onOpen } : headerProps) {
  return (
    <Flex
      minH="8vh"
      alignItems="center"
      bg="main.gray"
      color="white"
      padding="10px 15px"
      justifyContent="space-between"
    >
      <HamburgerIcon cursor="pointer" w={8} h={8} onClick={onOpen} />

      <Box>
        <ColorModeSwitcher marginRight={2} />
      </Box>
    </Flex>
  );
}

export default Header;
