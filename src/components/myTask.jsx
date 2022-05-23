import { Box, Badge } from '@chakra-ui/react';

const MyTask = ({ headline, text, status }) => {
  return (
    <Box
      bg="task.lightGray"
      height="300px"
      marginTop="50px"
      margin="10px"
      width="400px"
      borderRadius="lg"
    >
      <Box textAlign="center">{headline}</Box>
      <Box ml={1}>
        <Badge borderRadius="full" px="5" bg="task.status">
          {status}
        </Badge>
      </Box>
      <Box textAlign="center">{text}</Box>
    </Box>
  );
};

export default MyTask;
