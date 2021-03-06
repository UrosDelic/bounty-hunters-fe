import { Flex, Text } from '@chakra-ui/react';

type SumOfPointsProps = {
  text: string;
  color: string;
  sum: number;
};

function SumOfPoints({ text, color, sum }: SumOfPointsProps) {
  return (
    <Flex
      justifyContent="space-between"
      minW={['260px', '330px']}
      backgroundColor={color}
      padding="5px 10px"
      borderRadius="5px"
      marginBottom="10px"
    >
      <Text textTransform="uppercase">{text}</Text>
      <Text>{sum}</Text>
    </Flex>
  );
}

export default SumOfPoints;
