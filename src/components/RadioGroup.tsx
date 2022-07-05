import { Flex, Box, Text, useRadioGroup } from '@chakra-ui/react';
import { SingleRadioButton } from './index';
import { observer } from 'mobx-react';
import { AttributeValue } from '../types/index';
import AttributeValuesStore from '../stores/attributeValues';

interface RadioGroupProps {
  attributeArr: AttributeValue[];
  name: string;
}

function RadioGroup({ attributeArr, name }: RadioGroupProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: attributeArr[0]?.id,
    onChange: value => {
      AttributeValuesStore.changeSize(value);
    },
  });

  const group = getRootProps();

  return (
    <Box marginBottom={4}>
      <Text marginBottom={2}>Choose a {name}</Text>
      <Flex wrap="wrap" {...group}>
        {attributeArr.map(attributeeObj => {
          const { id, value } = attributeeObj;
          const radio = getRadioProps({ value: id });
          return (
            <SingleRadioButton key={id} {...radio}>
              {value}
            </SingleRadioButton>
          );
        })}
      </Flex>
    </Box>
  );
}

export default observer(RadioGroup);
