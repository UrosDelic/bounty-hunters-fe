import { Flex, Box } from '@chakra-ui/react';
import { Header, Sidebar } from './index';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Flex minH="100vh" flexDirection="column">
      <Header />
      <Flex flex={1} flexDirection={['column', 'row']}>
        <Sidebar />
        <Box flex={1}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Layout;
