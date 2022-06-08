import TaskDetails from '../../components/my-tasks/TaskDetails';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import TasksStore from '../../stores/tasks';

const TaskDetailsPage = () => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      TasksStore.getTaskDetailsById(id);
    }
  });
  return (
    <Flex justify="center">
      <TaskDetails />
    </Flex>
  );
};

export default TaskDetailsPage;
