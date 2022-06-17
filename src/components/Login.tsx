import { Container, Heading, Stack, Box } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import LoginTest from './LoginTest';

const Login = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '5', sm: '8' }}
    >
      <Stack textAlign="center">
        <Heading size="md">Log in to your Bounty Hunters account</Heading>
      </Stack>
      <Box py={{ base: '5', sm: '8' }} px={{ base: '4', sm: '10' }}>
        <LoginTest></LoginTest>
      </Box>
    </Container>
  );
};
export default observer(Login);
