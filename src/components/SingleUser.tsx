import {
  Box,
  Text,
  Flex,
  Avatar,
  // Select
} from '@chakra-ui/react';
// import { EditIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';

type SingleUserProps = {
  name: string;
  role: string[];
};

function SingleUser({ name, role }: SingleUserProps) {
  // const [selectedValue, setSelectedValue] = useState(role);
  const [
    isEditClicked,
    //setIsEditClicked
  ] = useState(false);
  const selectElement = useRef<HTMLInputElement>(null);

  // function changeRole(e: ChangeEvent<HTMLInputElement>) {
  //   setSelectedValue(e.target.value);
  //   hideSelect();
  // }

  // function displaySelect() {
  //   setIsEditClicked(true);
  // }

  // function hideSelect() {
  //   setIsEditClicked(false);
  // }

  useEffect(() => {
    selectElement.current?.focus();
  }, [isEditClicked]);

  return (
    <Box
      backgroundColor="users.darkGray"
      borderRadius="8px"
      width="100%"
      height="100%"
    >
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
        <Flex
          alignItems="center"
          display={isEditClicked ? 'none' : 'flex'}
          minH="35px"
        >
          <Text
            textAlign="center"
            color="users.lightGray"
            textTransform="capitalize"
            marginRight="5px"
          >
            {role.join(', ')}
          </Text>
          {/* <EditIcon cursor="pointer" onClick={displaySelect} /> */}
        </Flex>
        {/* <Select
          ref={selectElement}
          size="sm"
          width="fit-content"
          value={selectedValue}
          onChange={changeRole}
          onBlur={hideSelect}
          display={isEditClicked ? 'block' : 'none'}
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </Select> */}
      </Flex>
    </Box>
  );
}

export default SingleUser;
