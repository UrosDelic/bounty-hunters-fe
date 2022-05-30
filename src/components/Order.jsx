import { Box, Text, Flex, Select, Heading, Option } from '@chakra-ui/react';
import { useState } from 'react';

function Order({ name, date, status }) {
  const [statusValue, setStatusValue] = useState(status);
  const statusColors = {
    pending: 'orders.purple',
    'in progress': 'orders.oliveGreen',
    fulfilled: 'orders.lightGreen',
  };
  const selectColor = statusColors[statusValue];

  function changeStatus(e) {
    setStatusValue(e.target.value);
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid"
      borderColor="main.gray"
      padding="20px 24px"
    >
      <Box>
        <Heading fontSize="18px">{name}</Heading>
        <Text fontSize="14px">{date}</Text>
      </Box>
      <Select
        value={statusValue}
        onChange={changeStatus}
        backgroundColor={selectColor}
        width="fit-content"
        textTransform="capitalize"
      >
        <option style={{ backgroundColor: 'inherit' }} value="pending">
          pending
        </option>
        <option style={{ backgroundColor: 'inherit' }} value="in progress">
          in progress
        </option>
        <option style={{ backgroundColor: 'inherit' }} value="fulfilled">
          fulfilled
        </option>
      </Select>
    </Flex>
  );
}

export default Order;
