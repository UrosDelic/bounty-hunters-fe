import { Text, Flex, ButtonGroup, Box, Input } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { PurpleIconButton, PurpleButton, RequiredWarningText } from './index';
import { observer } from 'mobx-react';
import AttributeValuesStore from '../stores/attributeValues';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface SingleAttributeValueProps {
  value: string;
  id: string;
}

function SingleAttributeValue({ id, value }: SingleAttributeValueProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { value } });
  const [isEditClicked, setIsEditClicked] = useState(false);

  function deleteAttributeValue() {
    AttributeValuesStore.deleteAttributeValue(id);
  }

  function changeAttributeValue(data: any) {
    AttributeValuesStore.changeAttributeValue(id, data);
    setIsEditClicked(prev => !prev);
  }

  function toggleEditInput() {
    setIsEditClicked(prev => !prev);
    reset();
  }

  return (
    <>
      <Flex
        marginBottom="10px"
        alignItems="center"
        justifyContent="space-between"
        padding="0px 5px"
      >
        {!isEditClicked && (
          <Text fontSize="18px" textTransform="capitalize">
            {value}
          </Text>
        )}
        {isEditClicked && (
          <Box width="100%">
            <form onSubmit={handleSubmit(changeAttributeValue)}>
              <Flex justifyContent="space-between">
                <Box>
                  <Input
                    type="text"
                    placeholder="Enter value..."
                    focusBorderColor="purple.500"
                    {...register('value', { required: 'This is required' })}
                  />
                </Box>
                <ButtonGroup marginLeft="10px">
                  <PurpleButton onClick={handleSubmit(changeAttributeValue)}>
                    Save
                  </PurpleButton>
                  <PurpleButton onClick={toggleEditInput}>Cancel</PurpleButton>
                </ButtonGroup>
              </Flex>
            </form>
          </Box>
        )}
        {!isEditClicked && (
          <ButtonGroup>
            <PurpleIconButton
              icon={<EditIcon />}
              ariaLabel={`edit ${value}`}
              onClick={toggleEditInput}
            />
            <PurpleIconButton
              icon={<DeleteIcon />}
              ariaLabel={`delete ${value}`}
              onClick={deleteAttributeValue}
            />
          </ButtonGroup>
        )}
      </Flex>
      <RequiredWarningText isShown={errors?.value} />
    </>
  );
}

export default observer(SingleAttributeValue);
