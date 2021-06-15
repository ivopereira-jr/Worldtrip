import { Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';
import ContinentContentInfos from './ContinentContentInfos';

export default function ContinentContent({
  continent,
}: ContinentProps): JSX.Element {
  const color = useColorModeValue('gray.700', 'gray.500');

  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        color={color}
        textAlign="justify"
        fontSize={['lg', 'xl', 'xl', '2xl']}
      >
        {continent.description}
      </Text>

      <ContinentContentInfos continent={continent} />
    </Grid>
  );
}
