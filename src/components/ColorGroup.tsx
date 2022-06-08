import { HStack, Box, Text, useRadioGroup } from '@chakra-ui/react';
import { ColorRadioButton } from './index';
import shirt from '../img/shirt.jpg';
import mug from '../img/mug.jpg';
import sticker from '../img/sticker.jpg';

function ColorGroup() {
  const options = [shirt, mug, sticker];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'size',
    defaultValue: 'react',
    onChange: value => console.log(value),
  });

  const group = getRootProps();

  return (
    <Box marginBottom={4}>
      <Text marginBottom={2}>Choose a color</Text>
      <HStack wrap="wrap" {...group}>
        {options.map(value => {
          const radio = getRadioProps({ value });
          return <ColorRadioButton key={value} img={value} {...radio} />;
        })}
      </HStack>
    </Box>
  );
}

export default ColorGroup;
