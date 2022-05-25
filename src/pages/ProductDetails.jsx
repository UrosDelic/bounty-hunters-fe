import {
  Heading,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import shirt from '../img/shirt.jpg';
import sticker from '../img/sticker.jpg';
import mug from '../img/mug.jpg';

function ProductDetails() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={5}
      maxW="75%"
      margin="auto"
      marginTop="80px"
    >
      <GridItem
        padding="10px"
        borderRadius="5px"
        border="2px solid"
        borderColor="main.violet"
        gridRow="1/3"
      >
        <Image src={shirt} />
      </GridItem>
      <GridItem
        padding="10px"
        borderRadius="5px"
        border="2px solid"
        borderColor="main.violet"
      >
        <Text>Product name: Quantox Shirt</Text>
        <Text>Price in points: 40</Text>
        <Text>Product description:</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          facere saepe explicabo culpa dignissimos quas nisi rem molestias
          praesentium, doloremque dicta ipsam, obcaecati, sint repellendus omnis
          quibusdam. Quam, eum fuga. Magnam inventore vero non recusandae unde,
          saepe facilis deleniti odio quas maxime fugit necessitatibus, commodi
          possimus officia velit? Vero ut ea cum praesentium, labore rem
          voluptate repudiandae consectetur perferendis architecto. Corporis,
          quod cumque facere quidem vitae officiis velit veritatis enim nisi,
          non ut porro nesciunt saepe ducimus doloribus! Illo tempore
          consectetur consequatur, dolor nisi dolorem iusto porro facere
          voluptatum distinctio. Debitis ad quis amet at cumque illo! Quam
          molestiae magnam vel, voluptatem accusantium architecto quibusdam,
          illum explicabo quis autem odio optio similique aliquid aliquam.
        </Text>
      </GridItem>
      <GridItem
        padding="10px"
        borderRadius="5px"
        border="2px solid"
        borderColor="main.violet"
      >
        <Text marginBottom="10px">Choose your size:</Text>
        <Flex>
          <Box padding="10px" backgroundColor="black">
            S
          </Box>
          <Box padding="10px" backgroundColor="black">
            M
          </Box>
          <Box padding="10px" backgroundColor="black">
            L
          </Box>
          <Box padding="10px" backgroundColor="black">
            XL
          </Box>
          <Box padding="10px" backgroundColor="black">
            XXL
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default ProductDetails;
