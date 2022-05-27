import { Box, Text, Flex, Avatar } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

function SingleUser({ name, role }) {
  return (
    <Flex padding="20px" direction="column" alignItems="center">
      {/* <Box
        width="90px"
        height="90px"
        borderRadius="50%"
        backgroundColor="lightGray"
        marginBottom="10px"
      ></Box> */}
      <Avatar
        name={name}
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
        {name}
      </Text>
      <Flex alignItems="center">
        <Text
          textAlign="center"
          color="users.lightGray"
          textTransform="capitalize"
          marginRight="5px"
        >
          {role}
        </Text>
        <EditIcon cursor="pointer" />
      </Flex>
    </Flex>
  );
}

export default SingleUser;
