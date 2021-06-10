import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/images/banner.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <div>
          <Heading
            color="gray.100"
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
            fontWeight="500"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>

          <Text
            color="gray.300"
            fontSize={['0.8rem', 'xl']}
            mt="5"
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        <Image
          src="/assets/airplane.svg"
          alt="Avião amarelo e brando voando com algumas nuvens ao redor."
          w={['300px', '300px', '300px', '430px']}
          ml="8"
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
        />
      </Flex>
    </Flex>
  );
}
