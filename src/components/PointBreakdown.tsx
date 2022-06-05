import { Box, Flex, Text, Grid, GridItem } from '@chakra-ui/react';
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
    // <Grid templateColumns="1fr 2fr" gap={4}>
    //   <GridItem>{children || <Text>&nbsp;</Text>}</GridItem>
    //   <GridItem>
    //     <Box>
    //       <Text color="#B3C5CD">{name}</Text>
    //       <Text fontSize={25} color="#FFFFFF">
    //         {number}
    //       </Text>
    //     </Box>
    //   </GridItem>
    // </Grid>
    <Flex alignItems="center" marginRight="20px" marginBottom="10px">
      {children}
      <Box marginLeft="10px">
        <Text color="#B3C5CD">{name}</Text>
        <Text fontSize={25} color="#FFFFFF">
          {number}
        </Text>
      </Box>
    </Flex>
  );
}

export default PointBreakdown;
