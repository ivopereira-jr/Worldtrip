import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      '700': '#47585b',
      '500': '#999999',
      '400': 'rgba(153,153,153,0.5)',
      '300': '#dadada',
      '100': '#f5f8fa',
    },
    yellow: {
      '400': 'rgba(255,186,8, 0.5)',
      '300': '#FFBA08',
      '250': '#f0cf7c',
      '200': '#fac42efd',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700',
      },
    },
  },
});
