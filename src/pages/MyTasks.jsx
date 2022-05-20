import MyTask from '../components/myTask';
import { Box } from '@chakra-ui/react';
const MyTasksPage = () => {
  return (
    <Box display="flex" flexDirection="row">
      <MyTask />
      <MyTask />
      <MyTask />
    </Box>
  );
};

export default MyTasksPage;
