import { Flex, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import sidebarData from '../ui-data/SidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
  return (
    <Flex flexDirection="column" w={['100%', '250px']} backgroundColor="gray">
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
            <Flex padding="6px 10px" alignItems="center">
              <Flex alignItems="center" w="30px">
                <FontAwesomeIcon icon={icon} />
              </Flex>
              <Text>{text}</Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
}

export default Sidebar;
