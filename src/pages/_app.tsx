import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Chakra } from '../Chakra';

import { theme } from '../styles/theme';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/slider.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Chakra cookies={pageProps.cookies}>
        <NextNProgress
          color="#ffba08"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Chakra>
    </ChakraProvider>
  );
}

export default App;
