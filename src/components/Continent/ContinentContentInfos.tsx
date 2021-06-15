import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function ContinentContentInfos({
  continent,
}: ContinentProps): JSX.Element {
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
        <Text fontSize={['md', 'xl']} fontWeight="600" color="gray.700">
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
        <Text fontSize={['md', 'xl']} fontWeight="600" color="gray.700">
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
        <Text fontSize={['md', 'xl']} fontWeight="600" color="gray.700">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  cursor="pointer"
                  ml="1"
                  color="gray.400"
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.300">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontSize="lg" fontWeight="400">
                {continent.cities_list}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
