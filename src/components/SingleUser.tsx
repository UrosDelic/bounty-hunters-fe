import {
  Box,
  Text,
  Flex,
  Avatar,
  // Select
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { UserProps, RoleProps } from '../pages/Users';
import { useQuery } from 'react-query';
import UsersService from '../services/users';

function SingleUser({ firstName, lastName, roles }: UserProps) {
  // const service = new UsersService();
  const rolesJoined = roles
    .map((singleRole: RoleProps) => singleRole.role.name.toLowerCase())
    .join(', ');
  // const {data} = useQuery(['roles'], () => service.updateUserRoles());

  return (
    <Box
      backgroundColor="users.darkGray"
      borderRadius="8px"
      width="100%"
      height="100%"
    >
      <Flex padding="20px" direction="column" alignItems="center" height="100%">
        <Avatar
          name={`${firstName} ${lastName}`}
          size="xl"
          marginBottom="10px"
          bg="users.lightGray"
          color="users.darkGray"
        />
        <Text
          textAlign="center"
          color="users.white"
          textTransform="uppercase"
          wordBreak="break-word"
        >
          {`${firstName} ${lastName}`}
        </Text>
        <Text
          textAlign="center"
          color="users.lightGray"
          textTransform="capitalize"
          marginRight="5px"
          marginBottom="15px"
        >
          {rolesJoined || 'No role'}
        </Text>
        <Flex alignItems="center" justifyContent="center" marginTop="auto">
          <Text marginRight="5px">Edit roles</Text>{' '}
          <EditIcon cursor="pointer" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default SingleUser;
