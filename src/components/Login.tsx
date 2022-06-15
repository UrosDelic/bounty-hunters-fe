import { Container, Heading, Stack, Box } from '@chakra-ui/react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

const Login = () => {
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
  };

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack textAlign="center">
        <Heading size="md">Log in to your Bounty Hunters account</Heading>
      </Stack>
      <Box py={{ base: '0', sm: '8' }} px={{ base: '4', sm: '10' }}>
        <Stack>
          <GoogleLogin
            clientId="267868351623-8an5obdlb5j0s2n0dopo0ntp7g7ip3sv.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Stack>
      </Box>
    </Container>
  );
};
export default Login;
