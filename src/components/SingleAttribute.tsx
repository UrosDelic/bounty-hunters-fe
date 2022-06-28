import {
  Box,
  Flex,
  ButtonGroup,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { AttributeModal } from './index';

interface SingleAttributeProps {
  name: string;
}

function SingleAttribute({ name }: SingleAttributeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        >
          {name}
        </Box>
        <ButtonGroup>
          <Button
            marginLeft="10px"
            onClick={onOpen}
            backgroundColor="purple.500"
            _hover={{ backgroundColor: 'purple.300' }}
          >
            Edit Values <EditIcon marginLeft="5px" />
          </Button>
          <Button
            backgroundColor="purple.500"
            _hover={{ backgroundColor: 'purple.300' }}
          >
            Delete <DeleteIcon marginLeft="5px" />
          </Button>
        </ButtonGroup>
      </Flex>
      <AttributeModal name={`Edit ${name}`} onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default SingleAttribute;
