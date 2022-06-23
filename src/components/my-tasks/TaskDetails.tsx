import {
  Flex,
  Spacer,
  Text,
  Box,
  Badge,
  Button,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Task } from 'types';
import dayjs from 'dayjs';
import BhEditor from 'components/core/bh-editor/BhEditor';
import { observer } from 'mobx-react';
import { useState } from 'react';
import StyledCard from 'components/core/StyledCard';

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
    <Box mt={10} w={['50rem']}>
      <StyledCard>
        <Stack minW="100%" p="50px" spacing="30px">
          <Heading textAlign="center" marginTop="3">
            {title}
          </Heading>
          <Box>
            <Badge px="5" bg="purple.300" borderRadius="10px">
              {points}
            </Badge>
          </Box>

          <Text>{dayjs(createdAt).format('DD-MM-YYYY')}</Text>

          <Text>{deadline}</Text>

          <Text align="center"> {description}</Text>

          <Button
            colorScheme="purple"
            variant="solid"
            alignSelf="center"
            onClick={onAddDescription}
            rightIcon={<EditIcon />}
          >
            Add description
          </Button>

          <BhEditor
            isOpen={showEditor}
            isClosed={closeEditor}
            submit={onSubmit}
          />
        </Stack>
      </StyledCard>
    </Box>
  );
};

export default observer(TaskDetails);
