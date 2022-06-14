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
} from '@chakra-ui/react';
import React from 'react';
import { PasswordField } from './PasswordField';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
  });
  const onSubmit = handleSubmit(data => console.log(data));
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
              Log in to your account
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
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    {...register('email', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                    id="email"
                    type="email"
                  />
                </FormControl>
                <PasswordField {...register('password')} />
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </HStack>
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
}
