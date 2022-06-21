import { Box, Text, Heading, Grid, GridItem } from '@chakra-ui/react';
import { StyledCard } from './index';
import dayjs from 'dayjs';

interface SingleOrderProps {
  createdAt: string;
  shippingAddress: string;
  status: string;
  name: string;
  price: number;
}

function SingleOrder({
  createdAt,
  shippingAddress,
  status,
  name,
  price,
}: SingleOrderProps) {
  return (
    <Box marginBottom="15px">
      <StyledCard>
        <Box padding="15px 25px" width="100%">
          <Heading size="lg" marginBottom="20px">
            {name}
          </Heading>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
            <GridItem>
              <Text>
                <Text as="span" fontWeight="bold">
                  Date:
                </Text>{' '}
                {dayjs(createdAt).format('DD/MM/YYYY')}
              </Text>
            </GridItem>
            <GridItem>
              <Text>
                <Text as="span" fontWeight="bold">
                  Address:
                </Text>{' '}
                {shippingAddress}
              </Text>
            </GridItem>
            <GridItem>
              <Text>
                <Text as="span" fontWeight="bold">
                  Status:
                </Text>{' '}
                {status.replace('_', ' ')}
              </Text>
            </GridItem>
            <GridItem>
              <Text>
                <Text as="span" fontWeight="bold">
                  Price:
                </Text>{' '}
                {price} points
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </StyledCard>
    </Box>
  );
}

export default SingleOrder;
