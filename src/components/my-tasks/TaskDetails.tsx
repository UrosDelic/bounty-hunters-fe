import { Flex, Spacer, Text } from '@chakra-ui/react';

const TaskDetails = () => {
  return (
    <Flex
      direction="column"
      className="test-details"
      bg="task.lightGray"
      w="auto"
      minW="10rem"
      maxW="60rem"
      p="5"
      m="5"
    >
      <Text textAlign="center" marginTop="3">
        Title
      </Text>
      <Flex>
        <Text marginLeft="2">created at</Text>
        <Spacer />
        <Text marginRight="2">due date</Text>
      </Flex>
      <Text align="center"> Full Description</Text>
      <Text marginLeft="2">Points</Text>
    </Flex>
  );
};

export default TaskDetails;
