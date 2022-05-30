import { Box, Grid, GridItem } from '@chakra-ui/react';
import { usersList } from '../testData/TestData';
import { SingleUser } from '../components/index';

function Users() {
  return (
    <Grid
      margin="auto"
      marginTop="50px"
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={6}
      maxWidth="1200px"
      padding="0px 25px 25px"
    >
      {usersList.map(user => {
        const { id } = user;
        return (
          <GridItem key={id}>
            <SingleUser {...user} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default Users;
