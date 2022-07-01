import {
  Heading,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { SpinnerLoader, OrderModal, RadioGroup } from '../components/index';
import shirt from '../img/shirt.jpg';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFeedbackText } from '../custom-hooks/useFeedbackText';
import { observer } from 'mobx-react';
import ProductsStore from '../stores/products';
import AttributeValuesStore from '../stores/attributeValues';
import OrdersStore from '../stores/orders';

function ProductDetails() {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    loading: productLoading,
    success: productSuccess,
    productById,
    productByIdName,
  } = ProductsStore;
  const {
    loading: attributeLoading,
    success: attributeSuccess,
    sizeData,
    colorData,
  } = AttributeValuesStore;
  const { isOrderSent } = OrdersStore;
  const { feedbackTranslate, feedbackOpacity } = useFeedbackText(isOrderSent);

  useEffect(() => {
    ProductsStore.getProductById(id);
  }, []);

  useEffect(() => {
    if (productByIdName) {
      AttributeValuesStore.getSizeAndColorAttributeValues(productByIdName);
    }
  }, [productByIdName]);

  if (productLoading || attributeLoading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      {productSuccess && attributeSuccess && (
        <Grid
          templateColumns={['none', 'none', 'none', 'repeat(2, 1fr)']}
          gap={5}
          maxW="1200px"
          margin="auto"
          marginTop="50px"
          padding="0px 25px 25px"
        >
          <GridItem padding="10px" borderRadius="5px">
            <Image
              src={
                productById?.productMedia[productById?.productMedia.length - 1]
                  ?.url || shirt
              }
              margin="auto"
              width="100%"
            />
          </GridItem>
          <GridItem padding="10px" borderRadius="5px">
            <Heading as="h1" size="xl" marginBottom={4}>
              {productById?.name}
            </Heading>
            <Heading as="h3" size="md" marginBottom={4}>
              {productById?.price} points
            </Heading>
            <Text marginBottom={4}>{productById?.description}</Text>
            <Box marginBottom="40px">
              <RadioGroup name="size" attributeArr={sizeData} />
              <RadioGroup name="color" attributeArr={colorData} />
            </Box>
            <Box marginTop="auto">
              <Button
                marginTop="20px"
                marginBottom="30px"
                width="100px"
                backgroundColor="purple.500"
                minW="180px"
                onClick={onOpen}
                _hover={{ backgroundColor: 'purple.400' }}
                _focus={{ outline: 'none' }}
              >
                Checkout
              </Button>
              <Text
                padding="0 5px"
                transform={feedbackTranslate}
                opacity={feedbackOpacity}
                transition="all 0.5s ease-out"
              >
                Order sent
              </Text>
            </Box>
          </GridItem>
        </Grid>
      )}
      <OrderModal isOpen={isOpen} onClose={onClose} name={`Your order`} />
    </>
  );
}

export default observer(ProductDetails);
