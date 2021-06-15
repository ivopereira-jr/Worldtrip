import {
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

interface TypesProps {
  icon: string;
  text: string;
}

export default function Type({ icon, text }: TypesProps): JSX.Element {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  const color = useColorModeValue('gray.700', 'gray.500');

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image src={`/assets/${icon}.svg`} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}

      <Text fontSize={['md', 'xl', '2xl']} fontWeight="600" color={color}>
        {text}
      </Text>
    </Flex>
  );
}
