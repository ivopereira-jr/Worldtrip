import {
  Flex,
  Heading,
  Icon,
  Popover,
  Portal,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function ContinentContentInfos({
  continent,
}: ContinentProps): JSX.Element {
  const color = useColorModeValue('gray.700', 'gray.500');

  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} fontWeight="500" color="yellow.300">
          {continent.countries}
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight="600" color={color}>
          paises
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} fontWeight="500" color="yellow.300">
          {continent.languages}
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight="600" color={color}>
          linguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} fontWeight="500" color="yellow.300">
          {continent.cities}
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight="600" color={color}>
          cidades +100
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  cursor="pointer"
                  ml="1px"
                  mb="2px"
                  color="gray.400"
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                />
              </span>
            </PopoverTrigger>
            <Portal>
              <PopoverContent color={color}>
                <PopoverArrow ml="3px" />
                <PopoverCloseButton />
                <PopoverBody fontSize="lg" fontWeight="400">
                  {continent.cities_list}
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
