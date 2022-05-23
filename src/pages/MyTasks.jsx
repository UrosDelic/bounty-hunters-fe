import MyTask from '../components/myTask';
import { Box } from '@chakra-ui/react';

const tasks = [
  { id: 1, headline: 'task 1 headline', txt: 'task 1 text' },
  { id: 2, headline: 'task 2 headline', txt: 'task 2 text' },
];

const MyTasksPage = () => {
  return (
    <Box display="flex" flexDirection="row">
      {tasks.map(task => (
        <MyTask key={task.id} headline={task.headline} text={task.txt}></MyTask>
      ))}
    </Box>
  );
};

export default MyTasksPage;
