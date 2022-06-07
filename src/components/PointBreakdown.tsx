import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type PointBreakdownProps = {
  name: string;
  number: number;
};

function PointBreakdown({
  name,
  number,
  children,
}: PropsWithChildren<PointBreakdownProps>) {
  return (
    <Grid templateColumns="1fr 2fr" gap={4} width={['auto', 'fit-content']}>
      <GridItem>{children || <Text>&nbsp;</Text>}</GridItem>
      <GridItem>
        <Box>
          <Text color="#B3C5CD">{name}</Text>
          <Text fontSize={25} color="#FFFFFF">
            {number}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default PointBreakdown;
