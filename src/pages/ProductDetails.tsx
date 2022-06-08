import {
  Heading,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import { SizeGroup, ColorGroup } from '../components/index';
import shirt from '../img/shirt.jpg';
// import sticker from '../img/sticker.jpg';
// import mug from '../img/mug.jpg';

function ProductDetails() {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['productDetails.black', 'productDetails.white'];

  return (
    <Grid
      templateColumns={['none', 'none', 'none', 'repeat(2, 1fr)']}
      gap={5}
      maxW="75%"
      margin="auto"
      marginTop="80px"
      marginBottom="50px"
    >
      <GridItem padding="10px" borderRadius="5px">
        <Image src={shirt} margin="auto" width="100%" />
      </GridItem>
      <GridItem padding="10px" borderRadius="5px">
        <Heading as="h1" size="xl" marginBottom={4}>
          Quantox Shirt
        </Heading>
        <Heading as="h3" size="md" marginBottom={4}>
          40 points
        </Heading>
        <Text marginBottom={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          facere saepe explicabo culpa dignissimos quas nisi rem molestias
          praesentium, doloremque dicta ipsam, obcaecati, sint repellendus omnis
          quibusdam.
        </Text>
        <Flex flexDirection="column" height="100%">
          <SizeGroup />
          <ColorGroup />
          <Button marginTop="20px" width="100px">
            Checkout
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default ProductDetails;
