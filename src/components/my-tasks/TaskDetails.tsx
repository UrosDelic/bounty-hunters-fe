import { Flex, Spacer, Text } from '@chakra-ui/react';
import { Task } from 'types';
import { observer } from 'mobx-react';

interface TaskDetailsProps {
  taskDetails: Task;
}

const TaskDetails = ({
  title,
  description,
  status,
  createdAt,
  deadline,
  updatedAt,
  points,
}: Task) => {
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
        {title}
      </Text>
      <Flex>
        <Text marginLeft="2">{createdAt}</Text>
        <Spacer />
        <Text marginRight="2">{deadline}</Text>
      </Flex>
      <Text align="center"> {description}</Text>
      <Text marginLeft="2">{points}</Text>
    </Flex>
  );
};

export default observer(TaskDetails);
