import { Box, Button } from '@chakra-ui/react';
import { SingleAttribute } from '../components/index';

function Attributes() {
  return (
    <Box
      maxWidth="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px"
    >
      <SingleAttribute name="shirt color" />
      <SingleAttribute name="mug color" />
      <Button
        backgroundColor="purple.500"
        _hover={{ backgroundColor: 'purple.300' }}
      >
        Add New Attribute
      </Button>
    </Box>
  );
}

export default Attributes;
