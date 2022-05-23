import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    main: {
      purple: '#A14EBF',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
  },
});

export default theme;
