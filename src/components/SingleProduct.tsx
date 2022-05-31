import {
  Box,
  Text,
  Flex,
  ButtonGroup,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';

type SingleCardProps = {
  name: string;
  points: number;
};

function SingleProduct({ name, points }: SingleCardProps) {
  const [isInactive, setIsInactive] = useState(false);
  const borderColor = isInactive ? 'main.gray' : '';
  const backgroundColor = isInactive ? '' : 'main.green';
  return (
    <Flex
      direction={['column', 'row', 'row', 'row']}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid"
      borderColor="main.gray"
      padding="20px 24px"
    >
      <Box>
        <Heading fontSize="18px">{name}</Heading>
        <Text fontSize="14px">{points} points</Text>
      </Box>
      <ButtonGroup>
        <Button
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          //   color="main.white"
          onClick={() => setIsInactive(prev => !prev)}
        >
          Set as {isInactive ? 'active' : 'inactive'}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default SingleProduct;
