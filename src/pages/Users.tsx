import { Grid, GridItem } from '@chakra-ui/react';
import { SingleUser, SpinnerLoader, FetchingError } from '../components/index';
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
    return <FetchingError />;
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
          {data.data?.users.map(user => {
            const { id } = user;
            return (
              <GridItem key={id} boxShadow="dark-lg" borderRadius="8px">
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
