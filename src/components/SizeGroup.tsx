import { HStack, useRadioGroup } from '@chakra-ui/react';
import { SizeRadioButton } from './index';

function SizeGroup() {
  const options = ['s', 'm', 'l', 'xl', 'xxl'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'size',
    defaultValue: 'react',
    onChange: value => console.log(value),
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map(value => {
        const radio = getRadioProps({ value });
        return (
          <SizeRadioButton key={value} {...radio}>
            {value}
          </SizeRadioButton>
        );
      })}
    </HStack>
  );
}

export default SizeGroup;
