import { HStack, Box, Text, useRadioGroup } from '@chakra-ui/react';
import { ColorRadioButton } from './index';
import shirt from '../img/shirt.jpg';
import { observer } from 'mobx-react';
import { AttributeValue } from '../types/index';

interface ColorGroupProps {
  colorArr: AttributeValue[];
}

function ColorGroup({ colorArr }: ColorGroupProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'size',
    defaultValue: colorArr[0]?.id,
    onChange: value => console.log(value),
  });

  const group = getRootProps();

  return (
    <Box marginBottom={4}>
      <Text marginBottom={2}>Choose a color</Text>
      <HStack wrap="wrap" {...group}>
        {colorArr.map(colorObj => {
          const { id } = colorObj;
          const radio = getRadioProps({ value: id });
          return <ColorRadioButton key={id} img={shirt} {...radio} />;
        })}
      </HStack>
    </Box>
  );
}

export default observer(ColorGroup);
