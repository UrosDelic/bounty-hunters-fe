import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { SingleAttribute } from '../components/index';
import shirt from '../img/shirt.jpg';
import mug from '../img/mug.jpg';
import sticker from '../img/sticker.jpg';

function EditProduct() {
  const image =
    'https://cdn.shopify.com/s/files/1/0665/2889/products/Image-1-The-Weekend-Boot-Allegra-Alice_Whittles-2000x2000_1280x.jpg?v=1632758527';
  return (
    <Box
      width="fit-content"
      maxWidth="1200px"
      margin="auto"
      marginTop="50px"
      padding="0px 25px 25px"
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={4}
        width="fit-content"
        margin="auto"
      >
        <GridItem border="1px solid green">
          <Flex alignItems="center" height="100%">
            <Image src={shirt} alt="shirt" margin="auto" />
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column" height="100%">
            <Heading marginBottom="10px" padding="10px" position="relative">
              Quantox Shirt
              <EditIcon position="absolute" top="10px" right="10px" />
            </Heading>
            <Text
              padding="10px"
              border="1px solid green"
              borderRadius="8px"
              marginBottom="15px"
            >
              The Weekend Boots are vegan and sustainably made with over 95%
              natural and recycled materials. They keep you cozy and dry all
              year and comfy all day. Their minimalist design is made to take
              you wherever your day ends up - on a trail, in the park or at
              brunch, they’ve got you covered.
            </Text>
            <Box width="100%">
              <Heading marginBottom="15px" fontSize="17px">
                Attributes
              </Heading>
              {/* <SingleAttribute name="color" />
              <SingleAttribute name="size" /> */}
              <Button backgroundColor="gray.500">Add New Attribute</Button>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default EditProduct;
