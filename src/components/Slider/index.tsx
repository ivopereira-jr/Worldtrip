import Link from 'next/link';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { ContinentsProps } from '../../pages';

SwiperCore.use([Navigation, Pagination]);

export default function Slider({ continents }: ContinentsProps): JSX.Element {
  return (
    <>
      <Heading
        fontSize={['lg', '3xl', '4xl']}
        fontWeight="500"
        textAlign="center"
        mb={['5', '14']}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Flex
        w="100%"
        maxW="1240px"
        h={['250px', '450px']}
        mx="auto"
        mb={['5', '20']}
      >
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
          }}
          style={{ width: '100%', flex: '1' }}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.slug}>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={`url('${continent.image}')`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Link href={`/continent/${continent.slug}`}>
                  <a>
                    <Heading
                      fontSize={['3xl', '4xl', '5xl']}
                      fontWeight="bold"
                      color="gray.100"
                    >
                      {continent.title}
                    </Heading>
                    <Text
                      fontSize={['0.8rem', '1xl', '2xl']}
                      fontWeight="bold"
                      color="gray.300"
                      mt={['2', '4']}
                    >
                      {continent.summary}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
}
