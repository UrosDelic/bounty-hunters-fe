import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { usersList } from '../testData/TestData';
import { SingleUser, SpinnerLoader } from '../components/index';
import UsersService from '../services/users';
import { useQuery } from 'react-query';

function Users() {
  const service = new UsersService();
  const { data, isLoading, isError, isSuccess } = useQuery(['users'], () =>
    service.getUsers()
  );

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (isError) {
    return <Heading>Error happened</Heading>;
  }

  return (
    <>
      {isSuccess && (
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
          {data.data.users.map((user: any) => {
            const { id } = user;
            return (
              <GridItem key={id}>
                <SingleUser {...user} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default Users;
