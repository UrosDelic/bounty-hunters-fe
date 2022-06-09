import { Grid, GridItem } from '@chakra-ui/react';
import { SingleUser, SpinnerLoader } from '../components/index';
// import { usersList } from '../testData/TestData';
import UsersStore from '../stores/users';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function Users() {
  const { loading, success, data } = UsersStore;

  useEffect(() => {
    UsersStore.getUsers();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  // if (isError) {
  //   return <FetchingError />;
  // }

  return (
    <>
      {success && (
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
          // width="fit-content"
        >
          {data.map(user => {
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

export default observer(Users);
