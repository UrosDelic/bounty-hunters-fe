import { Box, Badge, Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react';
interface MyTaskProps {
  headline: string;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  solution?: string | null;
  points: number;
}

const MyTask = ({
  headline,
  description,
  status,
  createdAt,
  updatedAt,
  points,
}: MyTaskProps) => {
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
      <Box textAlign="center">{description}</Box>
      <Flex>
        <Box textAlign="center">{createdAt}</Box>
        <Box textAlign="center">{updatedAt}</Box>
      </Flex>

      <Box textAlign="center">{points}</Box>
    </Box>
  );
};

export default observer(MyTask);
