import { Flex, Heading, Spinner } from '@chakra-ui/react';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getPrismicClient } from '../../services/prismic';

import Header from '../../components/Header';
import ContinentBanner from '../../components/Continent/ContinentBanner';
import ContinentContent from '../../components/Continent/ContinentContent';
import ContinentCities from '../../components/Continent/ContinentCities';

export interface ContinentProps {
  continent: {
    slug: string;
    banner_image: string;
    title: string;
    description: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities_suggestions: {
      city: string;
      country: string;
      city_image: string;
      city_flag: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>WorldTrip | {continent.title}</title>
        </Head>

        <Flex
          w="100vw"
          h="100vh"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.200"
            size="xl"
          />
          <Heading mt="6px" color="gray.700">
            Carregando...
          </Heading>
        </Flex>
      </>
    );
  }

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner continent={continent} />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px={['1rem', '1rem', '0']}
      >
        <ContinentContent continent={continent} />
        <ContinentCities continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.predicates.at('document.type', 'continent'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('continent', String(slug), {});

  const continent = {
    slug: response.uid,
    banner_image: response.data.continentbanner.url,
    title: RichText.asText(response.data.bannertitle),
    description: RichText.asText(response.data.description),
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_list: RichText.asText(response.data.cities_100),
    cities_suggestions: response.data.citiessuggestions.map(city => {
      return {
        city: RichText.asText(city.city),
        country: RichText.asText(city.country),
        city_image: city.thumbnail.url,
        city_flag: city.flag.url,
      };
    }),
  };

  return {
    props: {
      continent,
    },
    revalidate: 2600,
  };
};
