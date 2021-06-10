import { Flex } from '@chakra-ui/react';

import Header from '../../components/Header';
import ContinentBanner from '../../components/Continent/ContinentBanner';
import ContinentContent from '../../components/Continent/ContinentContent';
import ContinentCities from '../../components/Continent/ContinentCities';

export default function Continent(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContinentContent />
        <ContinentCities />
      </Flex>
    </Flex>
  );
}
