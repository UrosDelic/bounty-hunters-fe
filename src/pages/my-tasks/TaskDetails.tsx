import TaskDetails from '../../components/my-tasks/TaskDetails';
import { useParams } from 'react-router-dom';
import TasksService from '../../services/tasks';
import { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';

const TaskDetailsPage = () => {
  const service = new TasksService();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      service.getTasksById(id);
    }
  });
  return (
    <Flex justify="center">
      <TaskDetails />
    </Flex>
  );
};

export default TaskDetailsPage;
