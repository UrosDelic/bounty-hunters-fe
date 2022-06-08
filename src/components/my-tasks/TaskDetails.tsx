import { Flex, Spacer, Text } from '@chakra-ui/react';

const TaskDetails = () => {
  return (
    <Flex
      direction="column"
      className="test-details"
      bg="task.lightGray"
      w="50rem"
      h="30rem"
      p="5"
      color="black"
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
