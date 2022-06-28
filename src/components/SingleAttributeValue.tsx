import { Text, Flex, ButtonGroup } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { PurpleIconButton } from './index';
import { observer } from 'mobx-react';

function SingleAttributeValue({ value }: { value: string }) {
  return (
    <Flex
      marginBottom="10px"
      alignItems="center"
      justifyContent="space-between"
      padding="0px 5px"
    >
      <Text fontSize="18px">{value}</Text>
      <ButtonGroup marginLeft="10px">
        <PurpleIconButton icon={<EditIcon />} ariaLabel={`edit ${value}`} />
        <PurpleIconButton icon={<DeleteIcon />} ariaLabel={`delete ${value}`} />
      </ButtonGroup>
    </Flex>
  );
}

export default observer(SingleAttributeValue);
