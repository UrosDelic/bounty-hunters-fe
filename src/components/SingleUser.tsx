import { Box, Text, Flex, Avatar } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { StyledCard } from './index';
import { UserRoles, Users } from 'types';
import UsersStore from '../stores/users';

interface SingleUserProps extends Users {
  onOpen: () => void;
}

function SingleUser({
  id,
  firstName,
  lastName,
  roles,
  photo_url,
  onOpen,
}: SingleUserProps) {
  const rolesJoined = roles
    .map((singleRole: UserRoles) => singleRole.role.name.toLowerCase())
    .join(', ');

  function openModal() {
    UsersStore.setCurrentUserId(id);
    onOpen();
  }

  return (
    <StyledCard>
      <Box borderRadius="8px" width="100%" height="100%">
        <Flex
          padding="20px"
          direction="column"
          alignItems="center"
          height="100%"
        >
          <Avatar
            name={`${firstName} ${lastName}`}
            src={photo_url || ''}
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
            fontWeight="bold"
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
          <Flex
            alignItems="center"
            justifyContent="center"
            marginTop="auto"
            cursor="pointer"
            onClick={openModal}
            _hover={{ fontWeight: 'bold' }}
          >
            <Text marginRight="5px">Edit roles</Text>{' '}
            <EditIcon cursor="pointer" />
          </Flex>
        </Flex>
      </Box>
    </StyledCard>
  );
}

export default SingleUser;
