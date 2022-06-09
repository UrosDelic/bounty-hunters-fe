import { HStack, Box, Text, useRadioGroup } from '@chakra-ui/react';
import { SizeRadioButton } from './index';

function SizeGroup() {
  const options = ['s', 'm', 'l', 'xl', 'xxl'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'size',
    defaultValue: options[0],
    onChange: value => console.log(value),
  });

  const group = getRootProps();

  return (
    <Box marginBottom={4}>
      <Text marginBottom={2}>Choose a size</Text>
      <HStack wrap="wrap" {...group}>
        {options.map(value => {
          const radio = getRadioProps({ value });
          return (
            <SizeRadioButton key={value} {...radio}>
              {value}
            </SizeRadioButton>
          );
        })}
      </HStack>
    </Box>
  );
}

export default SizeGroup;
