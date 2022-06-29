import { Text } from '@chakra-ui/react';

interface RequiredWarningTextProps {
  isShown: unknown;
}

function RequiredWarningText({ isShown }: RequiredWarningTextProps) {
  return isShown ? (
    <Text color="red.500" margin="2px 0px">
      Required!
    </Text>
  ) : (
    <Text margin="2px 0px">&nbsp;</Text>
  );
}

export default RequiredWarningText;
