import { Grid, Heading } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';
import City from './City';

export default function ContinentCities({
  continent,
}: ContinentProps): JSX.Element {
  return (
    <>
      <Heading fontSize={['2xl', '4xl']} fontWeight="500" mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        px={['30px', '0']}
        mb="20"
        alignItems="center"
        justifyContent="center"
      >
        {continent.cities_suggestions.map(city => (
          <City
            key={city.city}
            name={city.city}
            country={city.country}
            city_image={city.city_image}
            city_flag={city.city_flag}
          />
        ))}
      </Grid>
    </>
  );
}
