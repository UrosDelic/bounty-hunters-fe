import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    main: {
      purple: '#A14EBF',
      violet: '#B794F4',
      green: '#32CC4C',
      red: '#E14A39',
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
