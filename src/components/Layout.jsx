import { Flex } from '@chakra-ui/react';
import { Header, Sidebar } from './index';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Flex minH="100vh" flexDirection="column">
      <Header />
      <Flex minH="92vh">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </Flex>
    </Flex>
  );
}

export default Layout;
