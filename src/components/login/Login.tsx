import {
  Container,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
  Text,
  Button,
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Divider,
  FormErrorMessage,
} from '@chakra-ui/react';
// import { PasswordField } from './PasswordField';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import LoginStore from '../../stores/Login';

type FormValues = {
  email: string;
  // password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = handleSubmit(data => LoginStore.login(data));
  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your Bounty Hunters account
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <form onSubmit={onSubmit}>
            <Stack spacing="6">
              <Stack spacing="6">
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};
export default observer(Login);
