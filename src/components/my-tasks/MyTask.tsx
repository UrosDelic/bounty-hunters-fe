import { Box, Badge, Text, Heading, VStack, HStack } from '@chakra-ui/react';
import StyledCard from 'components/core/StyledCard';
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
    if (status === 'APPROVED') {
      return 'green';
    }
    if (status === 'PENDING') {
      return 'purple';
    }
    if (status === 'REJECTED') {
      return 'red';
    }
    return 'default';
  };

  return (
    <Box margin="1rem" w={['20rem', '25rem', '25rem', '30rem']}>
      <StyledCard>
        <VStack spacing="24px" w="100%" p="1rem">
          <Heading textAlign="center">{title}</Heading>

          <Badge
            px="5"
            py="1"
            borderRadius="full"
            colorScheme={switchStatusColor(status)}
          >
            {status}
          </Badge>

          <Text px={2} my={2} textAlign="center">
            {description}
          </Text>

          <HStack>
            <Text textAlign="center">{createdAt}</Text>
            <Text textAlign="center">{updatedAt}</Text>
          </HStack>

          <Badge px="5" bg="purple.300" borderRadius="10px">
            {points}
          </Badge>
        </VStack>
      </StyledCard>
    </Box>
  );
};

export default observer(MyTask);
