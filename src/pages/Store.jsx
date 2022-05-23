import { Heading, Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { productsList } from '../testData/TestData';

function Store() {
  return (
    <Box maxW="80%" margin="auto">
      <Heading as="h1" textAlign="center" marginTop="50px">
        Available products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} marginTop="50px">
        {productsList.map(product => {
          const { id, name, points } = product;
          return (
            <GridItem
              key={id}
              border="2px solid"
              borderColor="purple.300"
              borderRadius="8px"
            >
              {name}
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Store;
