import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

export type ModalLayoutProps = {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
  children: ReactNode;
};

function ModalLayout({ isOpen, onClose, name, children }: ModalLayoutProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalLayout;
