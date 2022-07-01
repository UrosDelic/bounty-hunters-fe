import { HamburgerIcon, BellIcon } from '@chakra-ui/icons';
import LoginStore from '../stores/Login';
import { observer } from 'mobx-react';
import {
  Flex,
  Circle,
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
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
      <Box>
        <Popover>
          <PopoverTrigger>
            <Box
              variant="ghost"
              fontSize="3xl"
              bg="transperent"
              p={0}
              as={Button}
              onClick={() => setOpenNotifications(true)}
              _hover={{ bg: 'gray.600' }}
              _active={{ bg: 'transperent' }}
            >
              <BellIcon fontSize="1.1em" />
              {notificationsCount?.unreadCount > 0 ? (
                <Circle
                  px={1}
                  fontSize="xs"
                  color="white"
                  bg="purple.400"
                  position="absolute"
                  top={2}
                  right={1}
                  size="auto"
                >
                  {notificationsCount?.unreadCount}
                </Circle>
              ) : (
                ''
              )}
            </Box>
          </PopoverTrigger>
          <PopoverContent
            w={{ base: '90vw', md: '70vw', lg: '35vw' }}
            mx={5}
            h="50vh"
            p={0}
            border={0}
            boxShadow="dark-lg"
          >
            <PopoverArrow />
            <PopoverBody p={0}>
              {notificationsOpen && <UserNotifications />}
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Button variant="solid" onClick={logout}>
          Log Out
        </Button>
      </Box>
    </Flex>
  );
}

export default observer(Header);
