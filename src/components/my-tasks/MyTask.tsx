import { Box, Badge, Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react';
interface MyTaskProps {
  title: string;
  description: string | null;
  status?: string;
  createdAt: string;
  updatedAt: string;
  solution?: string | null;
  points: number;
}

const MyTask = ({
  title,
  description,
  status,
  createdAt,
  updatedAt,
  points,
}: MyTaskProps) => {
  const switchStatusColor = (status: string | undefined) => {
    if (status === 'PENDING') {
      return 'purple';
    }
    if (status === 'APPROVED') {
      return 'green';
    } else return 'red';
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.300"
      margin="1rem"
      w={['15rem', '25rem', '25rem', '30rem']}
      boxShadow={`10px 10px 8px ${switchStatusColor(status)}`}
    >
      <Box padding="2rem">
        <Box textAlign="center">{title}</Box>
        <Box my={2} px={2}>
          <Badge
            px="5"
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
          {/* <Divider></Divider> */}
          <Box textAlign="center">{updatedAt}</Box>
        </Flex>
        <Box textAlign="center">{points}</Box>
      </Box>
    </Box>
  );
};

export default observer(MyTask);
