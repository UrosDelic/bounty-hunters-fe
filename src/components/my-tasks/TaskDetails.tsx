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

  const closeEditor = () => {
    setShowEditor(false);
  };

  const onSubmit = () => {
    //
  };
  return (
    <Flex
      borderRadius="lg"
      direction="column"
      className="test-details"
      bg="gray.300"
      w="50rem"
      h="30rem"
      p="5"
      color="black"
      m="5"
    >
      <Text textAlign="center" marginTop="3">
        {title}
      </Text>
      <Flex my={2}>
        <Text>{dayjs(createdAt).format('DD-MM-YYYY')}</Text>
        <Spacer />
        <Text>{deadline}</Text>
      </Flex>
      <Text align="center"> {description}</Text>
      <Flex my={2} justify="space-between">
        <Box alignSelf="center">
          <Badge px="5" bg="purple.300" color="black" borderRadius="10px">
            {points}
          </Badge>
        </Box>

        <Box>
          <Button
            variant="outline"
            color="purple.600"
            borderColor="purple.300"
            onClick={onAddDescription}
            rightIcon={<EditIcon />}
          >
            Add description
          </Button>
        </Box>
      </Flex>

      <BhEditor isOpen={showEditor} isClosed={closeEditor} submit={onSubmit} />
    </Flex>
  );
};

export default observer(TaskDetails);
