import { Flex, Box, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NotFound() {
  return (
    <Flex height="100vh" justifyContent="center" textAlign="center">
      <Box marginTop="100px">
        <Heading as="h1" marginBottom="10px">
          Page not found.
        </Heading>
        <Link
          fontSize="20px"
          _hover={{ textDecoration: 'none' }}
          as={RouterLink}
          to="/"
        >
          Go back to home page?
        </Link>
      </Box>
    </Flex>
  );
}

export default NotFound;
