import { useRadio, Box, Image } from '@chakra-ui/react';

function ColorRadioButton(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Image
        {...checkbox}
        src={props.img}
        borderRadius={3}
        border="1px solid"
        borderColor="#000000"
        width="85px"
        height="85px"
        cursor="pointer"
        _checked={{
          borderColor: '#B3C5CD',
        }}
        _hover={{
          borderColor: '#B3C5CD',
        }}
        _focus={{
          outline: 0,
        }}
        px={2}
        py={2}
      />
    </Box>
  );
}

export default ColorRadioButton;
