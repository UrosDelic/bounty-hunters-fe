import { ModalLayout } from './index';
import { Text, Flex, IconButton, Button, ButtonGroup } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

interface AttributeModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

function AttributeModal({ isOpen, onClose, name }: AttributeModalProps) {
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      <Flex
        marginBottom="10px"
        alignItems="center"
        justifyContent="space-between"
        padding="0px 5px"
      >
        <Text fontSize="18px">Red</Text>
        <ButtonGroup marginLeft="10px">
          <IconButton icon={<EditIcon />} aria-label={`edit ${name}`} />
          <IconButton icon={<DeleteIcon />} aria-label={`delete ${name}`} />
        </ButtonGroup>
      </Flex>
      <Flex
        marginBottom="10px"
        alignItems="center"
        justifyContent="space-between"
        padding="0px 5px"
      >
        <Text fontSize="18px">Blue</Text>
        <ButtonGroup marginLeft="10px">
          <IconButton icon={<EditIcon />} aria-label={`edit ${name}`} />
          <IconButton icon={<DeleteIcon />} aria-label={`delete ${name}`} />
        </ButtonGroup>
      </Flex>
      <Button>Add New</Button>
    </ModalLayout>
  );
}

export default AttributeModal;
