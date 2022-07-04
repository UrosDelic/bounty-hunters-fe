import {
  Text,
  Box,
  Badge,
  Button,
  Heading,
  HStack,
  VStack,
  Divider,
  Textarea,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Task } from 'types';
import dayjs from 'dayjs';
import BhEditor from 'components/core/bh-editor/BhEditor';
import { observer } from 'mobx-react';
import { useCallback, useState } from 'react';
import tasksStore from 'stores/tasks';
import StyledCard from 'components/core/StyledCard';

interface Props {
  task: Task;
}

const TaskDetails = ({
  task: { title, description, createdAt, deadline, points, id, solution },
}: Props) => {
  const [showEditor, setShowEditor] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [editorState, setEditorState] = useState(solution);

  const onSolutionButtonClick = () => {
    showEditor ? setShowEditor(false) : setShowEditor(true);
    showSolution ? setShowSolution(false) : setShowSolution(true);
  };
  const onSubmit = useCallback(
    (value: string) => {
      if (value) {
        tasksStore.addTaskSolution(id, value);
        tasksStore.getTaskDetailsById(id);
      }
      setShowSolution(true);
      setShowEditor(false);
    },
    [id]
  );

  const handleChange = (value: string) => {
    setEditorState(value);
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
          {description ? (
            <>
              <Text align="center"> {description}</Text>
              <Divider />
            </>
          ) : null}

          {showEditor ? (
            <BhEditor
              defaultValue={editorState}
              //onEditorChange={setEditorState}
              submit={onSubmit}
            />
          ) : (
            <Button
              type="button"
              //  colorScheme="purple"
              variant="solid"
              alignSelf="center"
              onClick={onSolutionButtonClick}
              rightIcon={<EditIcon />}
            >
              {solution ? `Edit Solution` : `Add Solution`}
            </Button>
          )}
          {!showEditor && solution ? (
            <Textarea readOnly defaultValue={solution}></Textarea>
          ) : null}
        </VStack>
      </StyledCard>
    </Box>
  );
};

export default observer(TaskDetails);
