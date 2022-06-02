import {
  Flex,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Container
} from '@chakra-ui/react';
import { Header, Sidebar } from './index';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef(null);
  return (
    <Flex
      minH="100vh"
      minW="100vw"
      boxSizing={'border-box'}
      flexDirection="column"
    >
      <Header onOpen={onOpen} />
      <Flex flex={1} flexDirection={['column', 'row']}>
        <Drawer
          isOpen={isOpen}
          placement="left"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Flex alignItems={'center'}>
              <Sidebar />
            </Flex>
          </DrawerContent>
        </Drawer>

        <Container maxW='100%' minH='100%' p={0}  >
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  );
}

export default Layout;
