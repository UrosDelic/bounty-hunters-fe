import { Box, Badge, Flex, Divider } from '@chakra-ui/react';
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
  const switchStatusColor = (status: string) => {
    if (status === 'PENDING') {
      return 'red';
    } else return 'green';
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      color="black"
      bg="gray.300"
      margin="1rem"
      w={['250px', '400px', '500px', '400px']}
      h={['250px', '400px', '500px', '400px']}
      p={2}
    >
      <Box textAlign="center">{headline}</Box>
      <Box my={2} px={2}>
        <Badge
          px="5"
          color="black"
          borderRadius="full"
          colorScheme={switchStatusColor(status)}
        >
          {status}
        </Badge>
      </Box>
      <Box px={2} my={2} textAlign="center">
        {description}
      </Box>
      <Flex px={2} my={2} justify="space-between">
        <Box textAlign="center">{createdAt}</Box>

        <Box textAlign="center">{updatedAt}</Box>
      </Flex>
      <Box textAlign="center">{points}</Box>
    </Box>
  );
};

export default observer(MyTask);
