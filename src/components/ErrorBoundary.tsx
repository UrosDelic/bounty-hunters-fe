import { Component, ReactNode } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Box
          backgroundColor="#2F3747"
          borderRadius="5px"
          maxW="500px"
          margin="auto"
          marginTop="50px"
          textAlign="center"
          padding="15px"
        >
          <Heading>Ooops, something went wrong :(</Heading>
          <Text>Try smacking your computer a couple of times</Text>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
