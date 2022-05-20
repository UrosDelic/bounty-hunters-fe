import React from 'react';
import { Box } from '@chakra-ui/react';
function StyledCard({ children }) {
  return (
    <Box
      w={280}
      h={280}
      mx={'auto'}
      boxShadow="dark-lg"
      p="2"
      rounded="md"
      bg="white"
    >
      {children}
    </Box>
  );
}

export default StyledCard;
