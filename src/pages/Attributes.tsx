import { Box, Input, Flex, Text, ButtonGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SingleAttribute } from '../components/index';
import ProductAttributesStore from '../stores/productAttributes';
import AttributeValuesStore from '../stores/attributeValues';
import { SpinnerLoader, PurpleButton } from '../components/index';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';

function Attributes() {
  const { loading, success, productAttributes } = ProductAttributesStore;
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function toggleInputField() {
    setIsAddNewClicked(prev => !prev);
    reset();
  }

  function postNewAttribute(data: any) {
    console.log(data);
    ProductAttributesStore.addNewProductAttribute(data);
    toggleInputField();
  }

  useEffect(() => {
    ProductAttributesStore.getProductAttributes();
    AttributeValuesStore.getAttributeValues();
  }, []);

  if (loading) {
    <SpinnerLoader />;
  }

  return (
    <>
      {success && (
        <Box
          maxWidth="1200px"
          margin="auto"
          marginTop="50px"
          padding="0px 25px 25px"
        >
          {productAttributes.map(pa => {
            const { id, name } = pa;
            return <SingleAttribute key={id} id={id} name={name} />;
          })}
          {!isAddNewClicked && (
            <PurpleButton onClick={toggleInputField}>
              Add New Attribute
            </PurpleButton>
          )}
          {isAddNewClicked && (
            <form onSubmit={handleSubmit(postNewAttribute)}>
              <Flex
                maxW="380px"
                justifyContent="space-between"
                direction={['column', 'row']}
              >
                <Box>
                  <Input
                    {...register('name', { required: 'This is required' })}
                    type="text"
                    placeholder="Enter name of new attribute..."
                    focusBorderColor="purple.500"
                    w="100%"
                  />
                  {errors.name ? (
                    <Text color="red.500" margin="5px 0px">
                      Required!
                    </Text>
                  ) : (
                    <Text margin="5px 0px">&nbsp;</Text>
                  )}
                </Box>
                <ButtonGroup>
                  <PurpleButton onClick={handleSubmit(postNewAttribute)}>
                    Save
                  </PurpleButton>
                  <PurpleButton onClick={toggleInputField}>Cancel</PurpleButton>
                </ButtonGroup>
              </Flex>
            </form>
          )}
        </Box>
      )}
    </>
  );
}

export default observer(Attributes);
