import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CityProps {
  name: string;
  country: string;
  city_image: string;
  city_flag: string;
}

export default function City({
  name,
  country,
  city_image,
  city_flag,
}: CityProps): JSX.Element {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        src={city_image}
        alt={`imagem da cidade de ${name}`}
        w="100%"
        h="170px"
      />
      <Flex
        // bg="white"
        p="6"
        align="center"
        justify="space-between"
        border="1px"
        borderColor="yellow.250"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text mt="3" fontSize="md" fontWeight="500" color="gray.500">
            {country}
          </Text>
        </Flex>
        <Image
          src={city_flag}
          alt={`bandeira ${country}`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
