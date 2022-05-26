import { Flex, Link, Text, DrawerCloseButton } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import sidebarData from '../ui-data/SidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from '../context/appContext';

function Sidebar() {
  const { userRole } = useAppContext();

  return (
    <Flex flexDirection="column" w={['100%']} backgroundColor="main.gray">
      <Text mx={4} fontSize="3xl" color="white" fontWeight={'bold'}>
        Bounty Hunters <DrawerCloseButton mt={1} fontSize="md" color="white" />
      </Text>

      {sidebarData.map(link => {
        const { text, route, icon, role } = link;
        const isLinkDisplayed = userRole === role ? 'block' : 'none';
        return (
          <Link
            key={text}
            as={NavLink}
            to={route}
            color="white"
            outline="none"
            textTransform="capitalize"
            _activeLink={{ fontWeight: 'bold', border: '2px solid #EBE8F8' }}
            display={isLinkDisplayed}
          >
            <Flex padding="6px 20px" alignItems="center">
              <Flex alignItems="center" w="30px">
                <FontAwesomeIcon icon={icon} />
              </Flex>
              <Text fontSize="18">{text}</Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
}

export default Sidebar;
