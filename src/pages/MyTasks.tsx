import MyTask from '../components/myTask';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import TasksService from '../services/tasks';

const tasks = [
  { id: 1, headline: 'task 1 headline', txt: 'task 1 text', status: 'To Do' },
  { id: 2, headline: 'task 2 headline', txt: 'task 2 text', status: 'Done' },
];

const service = new TasksService();

const MyTasksPage = () => {
  useEffect(() => {
    service.getTasks();
  }, []);
  return (
    <Box display="flex" flexDirection="row">
      {tasks.map(task => (
        <MyTask
          key={task.id}
          headline={task.headline}
          text={task.txt}
          status={task.status}
        ></MyTask>
      ))}
    </Box>
  );
};

export default MyTasksPage;
