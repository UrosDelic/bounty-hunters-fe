import { Box, Text, Flex, Avatar, Select } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';

function SingleUser({ name, role }) {
  const [selectedValue, setSelectedValue] = useState(role);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const selectElement = useRef();

  function changeRole(e) {
    setSelectedValue(e.target.value);
    hideSelect();
  }

  function displaySelect() {
    setIsEditClicked(true);
  }

  function hideSelect() {
    setIsEditClicked(false);
  }

  useEffect(() => {
    selectElement.current.focus();
  }, [isEditClicked]);

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
      <Flex alignItems="center" display={isEditClicked ? 'none' : 'flex'}>
        <Text
          textAlign="center"
          color="users.lightGray"
          textTransform="capitalize"
          marginRight="5px"
        >
          {selectedValue}
        </Text>
        <EditIcon cursor="pointer" onClick={displaySelect} />
      </Flex>
      <Select
        ref={selectElement}
        size="sm"
        width="fit-content"
        value={selectedValue}
        onChange={changeRole}
        display={isEditClicked ? 'block' : 'none'}
      >
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
        <option value="superadmin">Superadmin</option>
      </Select>
    </Flex>
  );
}

export default SingleUser;
