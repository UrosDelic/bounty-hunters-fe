import { Flex, Spacer, Text } from '@chakra-ui/react';

const TaskDetails = () => {
  return (
    <Flex
      direction="column"
      className="test-details"
      w="50vw"
      h="50vh"
      bg="task.lightGray"
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
