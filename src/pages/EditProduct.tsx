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
import { SingleAttribute } from '../components/index';
import shirt from '../img/shirt.jpg';
// import mug from '../img/mug.jpg';
// import sticker from '../img/sticker.jpg';

function EditProduct() {
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
        <GridItem>
          <Flex direction="column" height="100%">
            <Heading marginBottom="10px" padding="10px">
              Quantox Shirt
            </Heading>
            <Text
              flex="1"
              minH="300px"
              padding="10px"
              border="1px solid green"
              borderRadius="8px"
            >
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eius obcaecati suscipit earum officiis neque provident
              similique corporis commodi exercitationem soluta totam
            </Text>
          </Flex>
        </GridItem>
        <GridItem border="1px solid green">
          <Image src={shirt} alt="shirt" margin="auto" />
        </GridItem>
        <GridItem colSpan={[1, 1, 2]}>
          <Box width="100%">
            <Heading marginBottom="15px">Attributes</Heading>
            <SingleAttribute name="color" />
            <SingleAttribute name="size" />
            <Button>Add New Attribute</Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default EditProduct;
