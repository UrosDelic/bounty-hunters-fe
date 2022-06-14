import { Box } from '@chakra-ui/react';
const StyledCard = ({ children, direction }: any) => {
  return (
    <Box
      mx={'auto'}
      boxShadow="dark-lg"
      rounded="md"
      color='white'
      overflow='hidden'
    >
      {children}

    </Box>
  );
}

export default StyledCard;
