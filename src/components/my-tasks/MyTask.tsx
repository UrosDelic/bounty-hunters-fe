import { Box, Badge } from '@chakra-ui/react';
import { observer } from 'mobx-react';
type MyTaskProps = {
  headline: String;
  text: String | null;
  status: String;
};

const MyTask = ({ headline, text, status }: MyTaskProps) => {
  return (
    <Box
      color="black"
      bg="gray.300"
      height="300px"
      marginTop="50px"
      margin="10px"
      width="400px"
      borderRadius="lg"
    >
      <Box textAlign="center">{headline}</Box>
      <Box ml={1}>
        <Badge color="black" borderRadius="full" px="5" bg="task.status">
          {status}
        </Badge>
      </Box>
      <Box textAlign="center">{text}</Box>
    </Box>
  );
};

export default observer(MyTask);
