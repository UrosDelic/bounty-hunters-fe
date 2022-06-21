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
  IconButton

} from '@chakra-ui/react';
import { UserNotifications } from 'components/index';
import { useEffect, useState } from 'react';
import UserNotificationsStore from 'stores/user-notifications';
type headerProps = {
  onOpen: any;
};

function Header({ onOpen }: headerProps) {
  const { logout } = LoginStore;

  const [notificationsOpen, setOpenNotifications] = useState(false);
  const { notificationsCount } = UserNotificationsStore;
  useEffect(() => {
    UserNotificationsStore.getNotificationCount();
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

      <Box >
        <Menu >
          <MenuButton
            mx={4}
            onClick={() => setOpenNotifications(true)}
            position="relative"
          >
            <IconButton icon={<BellIcon />}
              variant='ghost'
              aria-label='Notification Icon'
              fontSize='25px'></IconButton>

            {notificationsCount?.unreadCount > 0 ? (
              <Circle
                size={'auto'}
                px={'5px'}
                mx={1}
                fontSize="xs"
                color="white"
                bg="purple.400"
                position="absolute"
                top={1}
                right={-1}
              >
                {notificationsCount?.unreadCount}
              </Circle>
            ) : ''}
          </MenuButton>

          <MenuList w={{ base: '90vw', md: '70vw', lg: '30vw' }} h="40vh" p={0} border={0} boxShadow='dark-lg' >
            {notificationsOpen && <UserNotifications />}
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
