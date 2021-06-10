import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TypesProps {
  icon: string;
  text: string;
}

export default function Type({ icon, text }: TypesProps): JSX.Element {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image src={`/assets/${icon}.svg`} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}

      <Text fontSize={['md', 'xl', '2xl']} fontWeight="600" color="gray.700">
        {text}
      </Text>
    </Flex>
  );
}
