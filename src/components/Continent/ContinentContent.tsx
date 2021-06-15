import { Grid, Text } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';
import ContinentContentInfos from './ContinentContentInfos';

export default function ContinentContent({
  continent,
}: ContinentProps): JSX.Element {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        color="gray.700"
        textAlign="justify"
        fontSize={['lg', 'xl', 'xl', '2xl']}
      >
        {continent.description}
      </Text>

      <ContinentContentInfos continent={continent} />
    </Grid>
  );
}
