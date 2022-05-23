import {
  Heading,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import { productsList } from '../testData/TestData';

function Store() {
  return (
    <Box maxW="80%" margin="auto" boxSizing="border-box">
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
          const { id, name, points, image } = product;
          return (
            <GridItem
              key={id}
              border="2px solid"
              borderColor="purple.300"
              borderRadius="8px"
              padding="10px"
            >
              <Flex direction="column" alignItems="center">
                <Image
                  src={image}
                  alt={name}
                  margin="auto"
                  width={['90%']}
                  height="300px"
                  cursor="pointer"
                />
                <Box width="100%" textAlign="left" paddingTop="15px">
                  <Text fontSize="20px">{name}</Text>
                  <Text fontSize="17px">{points}</Text>
                </Box>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Store;
