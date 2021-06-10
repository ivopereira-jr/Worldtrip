import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Types from '../components/TravelTypes';
import Divider from '../components/Divider';
import Slider from '../components/Slider';

export default function Home(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Types />
      <Divider />
      <Slider />
    </Flex>
  );
}
