import { HamburgerIcon, BellIcon } from '@chakra-ui/icons';
import LoginStore from '../stores/Login';
import { observer } from 'mobx-react';
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Circle,
  Box,
  Button,
  Stack,
} from '@chakra-ui/react';
import { NotificationList } from 'components/index';
import { useEffect, useState } from 'react';
import Notifications from 'stores/notifications';
type headerProps = {
  onOpen: any;
};

function Header({ onOpen }: headerProps) {
  const { logout } = LoginStore;

  const [notificationsOpen, setOpenNotifications] = useState(false);
  const { notificationsCount } = Notifications;
  useEffect(() => {
    Notifications.getNotificationsCount();
  }, []);

  return (
    <Flex
      minH="6vh"
      alignItems="center"
      bg="gray.600"
      color="white"
      padding="10px 15px"
      justifyContent="space-between"
      position="fixed"
      zIndex={2}
      w="100%"
    >
      <HamburgerIcon cursor="pointer" w={8} h={8} onClick={onOpen} />

      <Box>
        <Menu>
          <MenuButton mx={4} onClick={() => setOpenNotifications(true)}>
            <Box as={BellIcon} fontSize={['3xl']} color="primary" mt={1}></Box>
            <Circle
              right="6%"
              top={3}
              px={'2px'}
              mx={1}
              fontSize="xs"
              color="white"
              bg="purple.400"
              position="absolute"
            >
              {notificationsCount[0]?.totalCount}
            </Circle>
          </MenuButton>

          <MenuList w={{ base: '90vw', md: '70vw', lg: '30vw' }} h="40vh" p={0}>
            {notificationsOpen && <NotificationList />}
          </MenuList>
        </Menu>
        <Button variant="ghost" onClick={logout}>
          Log Out
        </Button>
      </Box>
    </Flex>
  );
}

export default observer(Header);
