import { Flex, Link, Text, DrawerCloseButton } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import sidebarData from '../ui-data/SidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
  return (
    <Flex flexDirection="column" w={['100%']} backgroundColor="purple.300">
      <Text mx={4} fontSize="3xl" color="white" fontWeight={'bold'}>
        Bounty Hunters <DrawerCloseButton mt={1} fontSize="md" color="white" />
      </Text>

      {sidebarData.map(link => {
        const { text, route, icon } = link;
        return (
          <Link
            key={text}
            as={NavLink}
            to={route}
            color="white"
            outline="none"
            textTransform="capitalize"
            border="1px solid #EBE8F8"
            _activeLink={{ fontWeight: 'bold', border: '2px solid #EBE8F8' }}
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
