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
import { ProductStatus } from '../types/index';

interface ProductDrawerProps {
  onClose: () => void;
  isOpen: boolean;
  name: string;
}

function ProductsDrawer({ onClose, isOpen, name }: ProductDrawerProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name, price, description } });

  function submitProduct(data: any) {
    ProductsStore.addNewProduct({ ...data, status: ProductStatus.ACTIVE });
    reset();
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent backgroundColor="gray.600">
        <DrawerCloseButton />
        <DrawerHeader>Edit {name}</DrawerHeader>
        <form action="">
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
          </DrawerBody>
        </form>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductsDrawer;
