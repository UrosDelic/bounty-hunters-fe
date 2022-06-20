import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useBackgroundGenerator } from '../../custom-hooks/useBackgroundGenerator';
type HorizontalCardProps = {
  children: any;
};

const StyledCard = ({ children }: HorizontalCardProps) => {

  const [background] = useState(useBackgroundGenerator())


  return (
    <>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
        minH={60}
        mx="auto"
        w={'100%'}
        h={'100%'}
        className={background}
        rounded="md"
        boxShadow="dark-lg"
        color="white"
        overflow="auto"
        alignItems="center"
      >
        {children}
      </Flex>
    </>
  );
};

export default StyledCard;
