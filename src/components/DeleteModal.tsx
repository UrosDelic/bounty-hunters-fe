import { Text, ButtonGroup, Button } from '@chakra-ui/react';
import { ModalLayout } from './index';
import { observer } from 'mobx-react';

export type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

function DeleteModal({ isOpen, onClose, name }: DeleteModalProps) {
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      <Text marginBottom="10px">Are you sure you want to delete {name}?</Text>
      <ButtonGroup>
        <Button>Yes</Button>
        <Button>No</Button>
      </ButtonGroup>
    </ModalLayout>
  );
}

export default observer(DeleteModal);
