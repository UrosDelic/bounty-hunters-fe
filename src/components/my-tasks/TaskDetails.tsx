import { Flex, Spacer, Text, Box, Badge, Button } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Task } from 'types';
import dayjs from 'dayjs';
import BhEditor from '../core/bh-editor/BhEditor';
import { observer } from 'mobx-react';
import { useState } from 'react';

interface Props {
  task: Task;
}

const TaskDetails = ({
  task: { title, description, createdAt, deadline, points },
}: Props) => {
  const [showEditor, setShowEditor] = useState(false);

  const onAddDescription = () => {
    setShowEditor(true);
  };
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
        <Text>{dayjs(createdAt).format('DD-MM-YYYY')}</Text>
        <Spacer />
        <Text>{deadline}</Text>
      </Flex>
      <Text align="center"> {description}</Text>
      <Flex justify="space-between">
        <Box my={2}>
          <Badge px="5" bg="purple.300" color="black" borderRadius="10px">
            {points}
          </Badge>
        </Box>
        <Box>
          <Button
            colorScheme="purple"
            variant="ghost"
            onClick={onAddDescription}
          >
            Add description
            <EditIcon marginLeft={1} />
          </Button>
        </Box>
      </Flex>

      {showEditor ? (
        <Box p={5}>
          <BhEditor />
        </Box>
      ) : null}
    </Flex>
  );
};

export default observer(TaskDetails);
