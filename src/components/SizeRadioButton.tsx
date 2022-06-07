import { useRadio, Box, Flex } from '@chakra-ui/react';

function SizeRadioButton(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        alignItems="center"
        justifyContent="center"
        width={['50px', '60px', '60px', '60px']}
        height="40px"
        textAlign="center"
        textTransform="uppercase"
        boxSizing="border-box"
        padding="0px 6px"
        borderColor="black"
        border="1px solid"
        cursor="pointer"
        bgColor="#ffffff"
        color="#000000"
        borderWidth="1px"
        boxShadow="md"
        _checked={{
          bg: '#000000',
          color: '#ffffff',
        }}
        _hover={{
          bg: '#000000',
          color: '#ffffff',
        }}
        _focus={{
          outline: 0,
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Flex>
    </Box>
  );
}

export default SizeRadioButton;
