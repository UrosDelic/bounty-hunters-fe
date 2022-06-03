import { Box, Text } from '@chakra-ui/react';

type PointBreakdownProps = {
  name: string;
  number: number;
};

function PointBreakdown({ name, number }: PointBreakdownProps) {
  return (
    <Box marginLeft="10px">
      <Text color="#B3C5CD">{name}</Text>
      <Text fontSize={25} color="#FFFFFF">
        {number}
      </Text>
    </Box>
  );
}

export default PointBreakdown;
