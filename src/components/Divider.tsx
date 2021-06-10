import { Box, Heading } from '@chakra-ui/react';

export default function Divider(): JSX.Element {
  return (
    <>
      <Box
        w={['60px', '90px']}
        h="2px"
        mx="auto"
        bg="gray.700"
        my={['9', '20']}
      />

      <Heading
        fontSize={['lg', '3xl', '4xl']}
        fontWeight="500"
        textAlign="center"
        mb={['5', '14']}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
    </>
  );
}
