import { Box, Text, Flex, Avatar, useDisclosure } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { UserModal } from './index';
import { UserRoles, Users } from 'types';

function SingleUser({ firstName, lastName, roles }: Users) {
  const rolesJoined = roles
    .map((singleRole: UserRoles) => singleRole.role.name.toLowerCase())
    .join(', ');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        backgroundColor="users.darkGray"
        borderRadius="8px"
        width="100%"
        height="100%"
      >
        <Flex
          padding="20px"
          direction="column"
          alignItems="center"
          height="100%"
        >
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
            marginBottom="15px"
          >
            {rolesJoined || 'No role'}
          </Text>
          <Flex alignItems="center" justifyContent="center" marginTop="auto">
            <Text marginRight="5px">Edit roles</Text>{' '}
            <EditIcon cursor="pointer" onClick={onOpen} />
          </Flex>
        </Flex>
      </Box>

      <UserModal
        isOpen={isOpen}
        onClose={onClose}
        name={`${firstName} ${lastName}`}
        roles={roles}
      />
    </>
  );
}

export default SingleUser;
