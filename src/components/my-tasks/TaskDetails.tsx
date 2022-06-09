import { Flex, Spacer, Text, Box, Badge } from '@chakra-ui/react';
import { Task } from 'types';
import { format } from 'date-fns';
import { observer } from 'mobx-react';

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails = ({
  task: { title, description, createdAt, deadline, points },
}: TaskDetailsProps) => {
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
        <Text marginLeft="2">
          {format(new Date(createdAt), 'LLLL d, yyyy hh:mm a')}
        </Text>
        <Spacer />
        <Text marginRight="2">{deadline}</Text>
      </Flex>
      <Text align="center"> {description}</Text>
      <Box my={2} px={2}>
        <Badge px="5" bg="purple.300" color="black" borderRadius="10px">
          {points}
        </Badge>
      </Box>
    </Flex>
  );
};

export default observer(TaskDetails);
