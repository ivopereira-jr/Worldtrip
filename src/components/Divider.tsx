import { Box } from '@chakra-ui/react';

export default function Divider(): JSX.Element {
  return (
    <Box
      w={['60px', '90px']}
      h="2px"
      mx="auto"
      bg="gray.700"
      my={['9', '20']}
    />
  );
}
