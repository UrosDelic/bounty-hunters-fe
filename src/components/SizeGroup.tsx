import { HStack, Box, Text, useRadioGroup } from '@chakra-ui/react';
import { SizeRadioButton } from './index';
import { observer } from 'mobx-react';
import { AttributeValue } from '../types/index';
import AttributeValuesStore from '../stores/attributeValues';

interface SizeGroupProps {
  sizeArr: AttributeValue[];
}

function SizeGroup({ sizeArr }: SizeGroupProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'size',
    defaultValue: sizeArr[0]?.id,
    onChange: value => {
      console.log(value);
      AttributeValuesStore.changeSize(value);
    },
  });

  const group = getRootProps();

  return (
    <Box marginBottom={4}>
      <Text marginBottom={2}>Choose a size</Text>
      <HStack wrap="wrap" {...group}>
        {sizeArr.map(sizeObj => {
          const { id, value } = sizeObj;
          const radio = getRadioProps({ value: id });
          return (
            <SizeRadioButton key={id} {...radio}>
              {value}
            </SizeRadioButton>
          );
        })}
      </HStack>
    </Box>
  );
}

export default observer(SizeGroup);
