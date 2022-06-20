import { Grid, GridItem } from '@chakra-ui/react';
import { SingleUser, SpinnerLoader } from '../components/index';
import UsersStore from '../stores/users';
import RolesStore from '../stores/roles';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function Users() {
  const { loading, success, users, isUserUpdated } = UsersStore;

  useEffect(() => {
    UsersStore.getUsers();
    RolesStore.getRoles();
  }, []);

  useEffect(() => {
    if (isUserUpdated) {
      UsersStore.getUsers();
    }
  }, [isUserUpdated]);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      {success && (
        <Grid
          margin="auto"
          marginTop="50px"
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, minmax(220px, 240px))',
            'repeat(3, minmax(220px, 240px))',
            'repeat(4, minmax(220px, 240px))',
          ]}
          gap={6}
          maxWidth="1200px"
          padding="0px 25px 25px"
          width="fit-content"
        >
          {users.map(user => {
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
