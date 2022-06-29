import {
  Flex,
  Spacer,
  Text,
  Box,
  Badge,
  Button,
  Heading,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Task } from 'types';
import dayjs from 'dayjs';
import BhEditor from 'components/core/bh-editor/BhEditor';
import { observer } from 'mobx-react';
import { useState } from 'react';
import tasksStore from 'stores/tasks';
import StyledCard from 'components/core/StyledCard';

interface Props {
  task: Task;
}

const TaskDetails = ({
  task: { title, description, createdAt, deadline, points, id },
}: Props) => {
  const [showEditor, setShowEditor] = useState(false);

  const onEditorChange = () => {
    showEditor ? setShowEditor(false) : setShowEditor(true);
  };
  const onSubmit = () => {
    tasksStore.addTaskSolution(id, 'test');
  };

  return (
    <Box w={['50rem']}>
      <StyledCard>
        <VStack minW="100%" py="2rem" px="5rem" spacing="2rem">
          <Heading textAlign="center" marginTop="3">
            {title}
          </Heading>
          <Badge px="5" bg="purple.300" borderRadius="10px">
            {points}
          </Badge>
          <HStack spacing={'20'}>
            <HStack>
              <Text>Created at</Text>
              <Text>{dayjs(createdAt).format('DD-MM-YYYY')}</Text>
            </HStack>

            {deadline ? (
              <HStack>
                <Text>Deadline</Text>
                <Text>{dayjs(deadline).format('DD-MM-YYYY')}</Text>
              </HStack>
            ) : null}
          </HStack>
          <Divider />
          {description ? <Text align="center"> description</Text> : null}
          <Divider />

          <Button
            colorScheme="purple"
            variant="solid"
            alignSelf="center"
            onClick={onEditorChange}
            rightIcon={<EditIcon />}
          >
            Submit Solution
          </Button>

          <BhEditor
            isOpen={showEditor}
            isClosed={onEditorChange}
            submit={onSubmit}
          />
        </VStack>
      </StyledCard>
    </Box>
  );
};

export default observer(TaskDetails);
