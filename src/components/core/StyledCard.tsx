import React from 'react';
import { Box } from '@chakra-ui/react';
function StyledCard({ children,bg }:any) {
  return (
    <Box
      bgGradient={bg}
      mx={'auto'}
      boxShadow="dark-lg"
      p="2"
      rounded="md"
    >
      {children}
    </Box>
  );
}

export default StyledCard;
