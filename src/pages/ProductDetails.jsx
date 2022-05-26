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
import shirt from '../img/shirt.jpg';
import sticker from '../img/sticker.jpg';
import mug from '../img/mug.jpg';

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
      <GridItem
        padding="10px"
        borderRadius="5px"
        // border="2px solid"
        // borderColor="main.violet"
        gridRow={['1/2', '1/2', '1/2', '1/3']}
      >
        <Image src={mug} margin="auto" width="100%" />
      </GridItem>
      <GridItem
        padding="10px"
        borderRadius="5px"
        // border="2px solid"
        // borderColor="main.violet"
      >
        <Text>Product name: Quantox Shirt</Text>
        <Text>Price in points: 40</Text>
        <Text>Product description:</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          facere saepe explicabo culpa dignissimos quas nisi rem molestias
          praesentium, doloremque dicta ipsam, obcaecati, sint repellendus omnis
          quibusdam.
        </Text>
      </GridItem>
      <GridItem
        padding="10px"
        borderRadius="5px"
        // border="2px solid"
        // borderColor="main.violet"
      >
        <Flex flexDirection="column" height="100%">
          <Box>
            <Text marginBottom="10px">Choose your size:</Text>
            <Flex marginBottom="15px">
              {sizes.map(size => {
                return (
                  <Box
                    width={['50px', '60px', '60px', '60px']}
                    textAlign="center"
                    padding="6px"
                    borderColor="black"
                    border="1px solid"
                    marginRight="5px"
                    cursor="pointer"
                  >
                    {size}
                  </Box>
                );
              })}
            </Flex>
          </Box>
          <Box>
            <Text marginBottom="10px">Choose your color:</Text>
            <Flex marginBottom="15px">
              {colors.map(color => {
                return (
                  <Box
                    width="30px"
                    height="30px"
                    borderRadius="50%"
                    border="1px solid"
                    borderColor="gray"
                    marginRight="5px"
                    backgroundColor={color}
                    cursor="pointer"
                  ></Box>
                );
              })}
            </Flex>
          </Box>
          <Button marginTop="20px" width="100px">
            Checkout
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default ProductDetails;
