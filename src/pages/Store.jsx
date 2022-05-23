import {
  Heading,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { productsList } from '../testData/TestData';

function Store() {
  return (
    <Box maxW="90%" margin="auto" marginBottom="50px" boxSizing="border-box">
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
            >
              <Flex direction="column" alignItems="center">
                <Link as={RouterLink} to={`/store/${id}`}>
                  <Image
                    src={image}
                    alt={name}
                    margin="auto"
                    width="200px"
                    height="300px"
                    cursor="pointer"
                  />
                </Link>
                <Box
                  width="100%"
                  textAlign="left"
                  padding="10px"
                  backgroundColor="purple.300"
                >
                  <Text fontSize="20px">{name}</Text>
                  <Text fontSize="17px">Points needed: {points}</Text>
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
