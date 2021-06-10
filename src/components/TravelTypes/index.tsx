import { Grid, GridItem } from '@chakra-ui/react';

import Type from './Type';

export default function Types(): JSX.Element {
  return (
    <Grid
      w="100%"
      maxW="1160px"
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      gap={[1, 5]}
      align="center"
      justifyContent="space-between"
      mt={['10', '32']}
      mx="auto"
    >
      <GridItem>
        <Type icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Type icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Type icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Type icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
