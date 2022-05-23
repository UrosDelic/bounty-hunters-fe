import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    main: {
      purple: '#A14EBF',
    },
    task: {
      lightGray: '#E2E8F0',
      status: '#5FB0B7',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
  },
});

export default theme;
