import { Heading, Box, Grid, GridItem } from '@chakra-ui/react';
import { StoreItem } from '../components/index';
import { productsList } from '../testData/TestData';

function Store() {
  return (
    <Box maxW="75%" margin="auto" marginBottom="50px" boxSizing="border-box">
      <Heading as="h1" textAlign="center" marginTop="50px">
        Available products
      </Heading>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={4}
        marginTop="50px"
      >
        {productsList.map(product => {
          const { id } = product;
          return (
            <GridItem
              key={id}
              border="2px solid"
              borderColor="main.violet"
              borderRadius="8px"
            >
              <StoreItem {...product} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Store;
