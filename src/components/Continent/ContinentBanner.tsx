import { Flex, Heading } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function ContinentBanner({
  continent,
}: ContinentProps): JSX.Element {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      mx="auto"
      h={['150px', '300px', '500px']}
      bgImage={`url('${continent.banner_image}')`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      <Flex
        w="100%"
        maxW="1160px"
        mx="auto"
        mb="12"
        align="flex-end"
        justify={['center', 'center', 'flex-start']}
      >
        <Heading
          textAlign={['center', 'left']}
          fontSize={['1.75rem', '5xl']}
          fontWeight="500"
          color="gray.100"
        >
          {continent.title}
        </Heading>
      </Flex>
    </Flex>
  );
}
