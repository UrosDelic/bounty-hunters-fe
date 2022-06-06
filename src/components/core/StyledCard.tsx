import { Box } from '@chakra-ui/react';
const StyledCard = ({ children, width, height, direction }: any) => {
  return (
    <Box
      mx={'auto'}
      my={10}
      boxShadow="dark-lg"
      rounded="md"
      w={width}
      h={height}
      display='flex'
      flexDirection={direction}
      alignItems='center'
      color='white'
      overflow='hidden'
      bg='white'
    >
      {children}

    </Box>
  );
}

export default StyledCard;
