import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    main: {
      gray: '#2F3747',
      purple: '#A14EBF',
      violet: '#B794F4',
    },
    task: {
      lightGray: '#E2E8F0',
      status: '#5FB0B7',
    },
    wallet: {
      green: '#32CC4C',
      red: '#E14A39',
    },
    store: {
      violet: '#B794F4',
    },
    productDetails: {
      violet: '#B794F4',
      black: '#000000',
      white: '#FFFFFF',
    },
    myOrders: {
      lightGray: '#B3C5CD',
      green: '#32CC4C',
      yellow: '#FAFA05',
      violet: '#B794F4',
    },
    users: {
      white: '#ffffff',
      lightGray: '#B3C5CD',
      darkGray: '#2f3747',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
  },
});

export default theme;
