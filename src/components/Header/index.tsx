import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RiArrowLeftSLine } from 'react-icons/ri';

export default function Header(): JSX.Element {
  const { asPath } = useRouter();
  const isHomePage = asPath === '/';

  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      mx="auto"
      px="1rem"
      h={['50px', '100px']}
      align="center"
      justify="center"
    >
      <Grid
        w="100%"
        maxWidth="1160px"
        h="100%"
        mx="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {!isHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}

        <Image
          w={['81px', '184px']}
          src="/assets/logo.svg"
          alt="logomarca world trip com um avião no final da logo"
          justifySelf="center"
          gridColumn="2" // fixa na segunda posição
        />
      </Grid>
    </Flex>
  );
}
