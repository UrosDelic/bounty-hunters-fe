import { Box, Text, Flex, Avatar, Select } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function SingleUser({ name, role }) {
  const [selectedValue, setSelectedValue] = useState(role);
  const [isEditClicked, setIsEditClicked] = useState(false);

  return (
    <Flex padding="20px" direction="column" alignItems="center">
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
      <Select size="sm" defaultValue={role}>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
        <option value="superadmin">Superadmin</option>
      </Select>
    </Flex>
  );
}

export default SingleUser;
