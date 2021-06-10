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

export default function ContinentContentInfos(): JSX.Element {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} fontWeight="500" color="yellow.400">
          50
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
        <Heading fontSize={['2xl', '5xl']} fontWeight="500" color="yellow.400">
          60
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
        <Heading fontSize={['2xl', '5xl']} fontWeight="500" color="yellow.400">
          27
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
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontSize="lg" fontWeight="400">
                brasil, eua, canada, frança, japao
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
