import { ColorModeProvider, Flex, Heading } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box } from '@chakra-ui/react';

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
      <Box>
        <ColorModeSwitcher />
        <HamburgerIcon cursor="pointer" w={8} h={8} />
      </Box>
    </Flex>
  );
}

export default Header;
