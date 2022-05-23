import { Box, Badge } from '@chakra-ui/react';

const MyTask = () => {
  return (
    <Box
      bg="task.background"
      height="300px"
      marginTop="50px"
      margin="10px"
      width="400px"
      borderRadius="lg"
    >
      <Box textAlign="center">My Task headline</Box>
      <Box ml={1}>
        <Badge borderRadius="full" px="5" bg="task.status">
          To Do
        </Badge>
      </Box>
      <Box textAlign="center">Task description</Box>
    </Box>
  );
};

export default MyTask;
