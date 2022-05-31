import { Box, Text, Flex, Select, Heading } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

type OrderProps = {
  name: string;
  date: string;
  status: string;
};

function Order({ name, date, status }: OrderProps) {
  const [statusValue, setStatusValue] = useState(status);
  const statusColors: any = {
    pending: 'orders.purple',
    inProgress: 'orders.oliveGreen',
    fulfilled: 'orders.lightGreen',
  };
  const selectColor = statusColors[statusValue];

  function changeStatus(e: ChangeEvent<HTMLSelectElement>) {
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