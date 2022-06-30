import { useForm } from 'react-hook-form';
import { ModalLayout, PurpleButton, RequiredWarningText } from './index';
import { Input, Text, Box, Textarea } from '@chakra-ui/react';
import ProductsStore from '../stores/products';
import { ProductStatus } from '../types/index';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

function AddProductModal({ isOpen, onClose, name }: AddProductModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function submitProduct(data: any) {
    ProductsStore.addNewProduct({ ...data, status: ProductStatus.ACTIVE });
    reset();
  }

  return (
    <ModalLayout name={name} onClose={onClose} isOpen={isOpen}>
      <form onSubmit={handleSubmit(submitProduct)}>
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
        <PurpleButton onClick={handleSubmit(submitProduct)}>
          Submit
        </PurpleButton>
      </form>
    </ModalLayout>
  );
}

export default AddProductModal;
