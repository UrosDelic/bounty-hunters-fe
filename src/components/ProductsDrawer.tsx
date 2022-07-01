import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Button,
  Input,
  Box,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { PurpleButton, RequiredWarningText } from './index';
import { useForm } from 'react-hook-form';
import ProductsStore from '../stores/products';
import ProductMediasStore from '../stores/productMedias';

interface ProductDrawerProps {
  onClose: () => void;
  isOpen: boolean;
  name: string;
  price: number;
  description: string;
  image: string;
  productId: string;
}

function ProductsDrawer({
  onClose,
  isOpen,
  name,
  price,
  description,
  image,
  productId,
}: ProductDrawerProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name, price, description, image } });

  function submitProduct(data: any) {
    ProductMediasStore.postProductMedias(data.image, productId);
    ProductsStore.changeProduct(
      { name: data.name, description: data.description, price: data.price },
      productId
    );
    // onClose();
  }

  function cancelChange() {
    reset();
    onClose();
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent backgroundColor="gray.700">
        <DrawerCloseButton />
        <DrawerHeader>Edit {name}</DrawerHeader>
        <form onSubmit={handleSubmit(submitProduct)}>
          <DrawerBody>
            <Box marginBottom="5px">
              <Text marginBottom="10px">Product Name</Text>
              <Input
                type="text"
                placeholder="Enter name here..."
                focusBorderColor="purple.500"
                {...register('name', { required: true })}
              />
              <RequiredWarningText isShown={errors?.name} />
            </Box>
            <Box marginBottom="5px">
              <Text marginBottom="10px">Product Price</Text>
              <Input
                type="number"
                placeholder="Enter price here..."
                focusBorderColor="purple.500"
                {...register('price', { required: true })}
              />
              <RequiredWarningText isShown={errors?.price} />
            </Box>
            <Box marginBottom="5px">
              <Text marginBottom="10px">Product Description</Text>
              <Textarea
                placeholder="Enter description here..."
                focusBorderColor="purple.500"
                {...register('description', { required: true })}
              />
              <RequiredWarningText isShown={errors?.description} />
            </Box>
            <Box marginBottom="5px">
              <Text marginBottom="10px">Product Image</Text>
              <Input
                placeholder="Enter image url here..."
                focusBorderColor="purple.500"
                {...register('image', { required: true })}
              />
              <RequiredWarningText isShown={errors?.image} />
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <PurpleButton>Save</PurpleButton>
            <Button variant="outline" ml={3} onClick={cancelChange}>
              Cancel
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductsDrawer;
