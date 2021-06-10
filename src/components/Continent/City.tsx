import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function City(): JSX.Element {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        src="/images/city-bg.png"
        alt="imagem de ponte em londres"
        w="100%"
        h="170px"
      />
      <Flex
        bg="white"
        p="6"
        align="center"
        justify="space-between"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>
          <Text mt="3" fontSize="md" fontWeight="500" color="gray.500">
            Reino Unido
          </Text>
        </Flex>
        <Image
          src="/images/b-reino-unido.png"
          alt="bandeira do reino unido"
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
