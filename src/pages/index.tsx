import { Flex } from '@chakra-ui/react';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Types from '../components/TravelTypes';
import Divider from '../components/Divider';
import Slider from '../components/Slider';

export interface ContinentsProps {
  continents: {
    slug: string;
    image: string;
    title: string;
    summary: string;
  }[];
}

export default function Home({ continents }: ContinentsProps): JSX.Element {
  return (
    <>
      <Flex direction="column">
        <Header />
        <Banner />
        <Types />
        <Divider />
        <Slider continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continent'),
  ]);

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      image: continent.data.imageslider.url,
      title: RichText.asText(continent.data.titleslider),
      summary: RichText.asText(continent.data.summaryslider),
    };
  });

  return {
    props: {
      continents,
    },
    revalidate: 2600,
  };
};
