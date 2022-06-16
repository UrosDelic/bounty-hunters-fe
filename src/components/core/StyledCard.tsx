import { Flex } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import { useBackgroundGenerator } from '../../custom-hooks/useBackgroundGenerator';
type HorizontalCardProps = {
  children: any;
};

const HorizontalCard = ({ children }: HorizontalCardProps) => {
  const background = useBackgroundGenerator();
  const elementRef = useRef<HTMLDivElement | any>(background);

  useEffect(() => {
    elementRef.current = background;
  }, []);

  return (
    <>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
        minH={60}
        mx="auto"
        w={'100%'}
        h={'100%'}
        ref={elementRef}
        className={elementRef.current}
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

export default HorizontalCard;
