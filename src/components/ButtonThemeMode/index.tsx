import { useColorMode, Button } from '@chakra-ui/react';

export function ButtonThemeMode(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
}
