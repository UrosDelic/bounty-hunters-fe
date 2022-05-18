import { Flex, Box, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import sidebarData from '../ui-data/SidebarData';

function Sidebar() {
  return (
    <Flex flexDirection="column" w="250px" backgroundColor="gray">
      {sidebarData.map(link => {
        const { text, route } = link;
        return (
          <Link
            as={NavLink}
            to={route}
            color="white"
            outline="none"
            textTransform="capitalize"
            border="1px solid #EBE8F8"
            _activeLink={{ fontWeight: 'bold', border: '2px solid #EBE8F8' }}
          >
            <Box padding="6px 10px" key={text}>
              {text}
            </Box>
          </Link>
        );
      })}
    </Flex>
  );
}

export default Sidebar;
