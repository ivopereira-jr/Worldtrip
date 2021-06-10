import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

export default function Slider(): JSX.Element {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      h={['250px', '450px']}
      mx="auto"
      mb={['5', '10']}
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
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/images/europa.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/">
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  fontWeight="bold"
                  color="gray.100"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  fontWeight="bold"
                  color="gray.300"
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/images/europa.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/">
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  fontWeight="bold"
                  color="gray.100"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  fontWeight="bold"
                  color="gray.300"
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
