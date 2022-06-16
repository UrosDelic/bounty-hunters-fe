import { Container, Heading, Stack, Box } from '@chakra-ui/react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import LoginStore from 'stores/Login';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
// import  {loginProps}  from 'stores/Login'

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const Login = () => {
  useEffect(() => {
    console.log(localStorage);
  });
  const { login, userRoles } = LoginStore;
  const loginGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    login(response);
  };

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
        <Stack>
          <GoogleLogin
            clientId={client_id}
            buttonText="Login"
            onSuccess={loginGoogle}
            onFailure={loginGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <div>{userRoles}</div>
        </Stack>
      </Box>
    </Container>
  );
};
export default observer(Login);
