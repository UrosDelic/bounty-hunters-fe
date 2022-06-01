import {
  Box,
  Text,
  Flex,
  Avatar,
  // Select
} from '@chakra-ui/react';
import { UserProps, RoleProps } from '../pages/Users';

function SingleUser({ firstName, lastName, roles }: UserProps) {
  const rolesJoined = roles
    .map((singleRole: RoleProps) => singleRole.role.name.toLowerCase())
    .join(', ');

  return (
    <Box
      backgroundColor="users.darkGray"
      borderRadius="8px"
      width="100%"
      height="100%"
    >
      <Flex padding="20px" direction="column" alignItems="center">
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
        <Flex alignItems="center" minH="35px">
          <Text
            textAlign="center"
            color="users.lightGray"
            textTransform="capitalize"
            marginRight="5px"
          >
            {rolesJoined || 'No role'}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SingleUser;
