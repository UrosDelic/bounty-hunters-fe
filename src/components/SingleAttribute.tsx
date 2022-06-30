import { Box, Flex, ButtonGroup, Text, useDisclosure } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { AttributeModal, PurpleButton } from './index';
import ProductAttributesStore from '../stores/productAttributes';
import { observer } from 'mobx-react';

interface SingleAttributeProps {
  id: string;
  name: string;
}

function SingleAttribute({ name, id }: SingleAttributeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function deleteProductAttribute() {
    ProductAttributesStore.deleteProductAttribute(id);
  }

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
      >
        <Box
          backgroundColor="gray.500"
          borderRadius="8px"
          padding="8px"
          flex="1"
          textTransform="capitalize"
          wordBreak="break-word"
        >
          {name}
        </Box>
        <ButtonGroup marginLeft="10px">
          <PurpleButton onClick={onOpen}>
            <Text display={['none', 'inline']}>Edit Values</Text>{' '}
            <EditIcon marginLeft="5px" />
          </PurpleButton>
          <PurpleButton onClick={deleteProductAttribute}>
            <Text display={['none', 'inline']}>Delete</Text>{' '}
            <DeleteIcon marginLeft="5px" />
          </PurpleButton>
        </ButtonGroup>
      </Flex>
      <AttributeModal
        name={`Edit ${name}`}
        onClose={onClose}
        isOpen={isOpen}
        productAttributeName={name}
        productAttributeId={id}
      />
    </>
  );
}

export default observer(SingleAttribute);
