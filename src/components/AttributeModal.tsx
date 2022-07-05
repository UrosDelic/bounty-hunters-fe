import {
  ModalLayout,
  PurpleButton,
  SpinnerLoader,
  SingleAttributeValue,
  RequiredWarningText,
} from './index';
import { Box, Input, Flex, Text, ButtonGroup } from '@chakra-ui/react';
import AttributeValuesStore from '../stores/attributeValues';
import { observer } from 'mobx-react';
import { useFilterByProductAttributeName } from '../custom-hooks/useFilterByProductAttributeName';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface AttributeModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  productAttributeName: string;
  productAttributeId: string;
}

function AttributeModal({
  isOpen,
  onClose,
  name,
  productAttributeName,
  productAttributeId,
}: AttributeModalProps) {
  const { success, attributeValues } = AttributeValuesStore;
  const filteredData = useFilterByProductAttributeName(
    attributeValues,
    productAttributeName
  );
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function toggleInputField() {
    setIsAddNewClicked(prev => !prev);
    reset();
  }

  function addNew(data: any) {
    console.log({ ...data, productAttributeId });
    AttributeValuesStore.addNewAttributeValue({ ...data, productAttributeId });
    toggleInputField();
  }

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      {success ? (
        filteredData.map(av => {
          const { id, value } = av;
          return <SingleAttributeValue key={id} id={id} value={value} />;
        })
      ) : (
        <SpinnerLoader />
      )}
      {!isAddNewClicked && (
        <PurpleButton onClick={toggleInputField}>Add New</PurpleButton>
      )}
      {isAddNewClicked && (
        <form onSubmit={handleSubmit(addNew)}>
          <Flex justifyContent="space-between">
            <Box>
              <Input
                {...register('value', { required: 'This is required' })}
                type="text"
                placeholder="Add new..."
                focusBorderColor="purple.500"
                w="100%"
              />
              <RequiredWarningText isShown={errors?.value} />
            </Box>
            <ButtonGroup marginLeft="10px">
              <PurpleButton onClick={handleSubmit(addNew)}>Save</PurpleButton>
              <PurpleButton onClick={toggleInputField}>Cancel</PurpleButton>
            </ButtonGroup>
          </Flex>
        </form>
      )}
    </ModalLayout>
  );
}

export default observer(AttributeModal);
