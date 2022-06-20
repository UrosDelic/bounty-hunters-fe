import { Grid, GridItem, Box } from '@chakra-ui/react';
import { SingleUser, SpinnerLoader, SearchByInput } from '../components/index';
import UsersStore from '../stores/users';
import RolesStore from '../stores/roles';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useFilterBySearch } from '../custom-hooks/useFilterBySearch';

function Users() {
  const { loading, success, users, isUserUpdated } = UsersStore;
  const filteredUsers = useFilterBySearch(users, ['firstName', 'lastName']);

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
    <Box
      margin="auto"
      marginTop="50px"
      maxWidth="1200px"
      width="fit-content"
      padding="0px 25px 25px"
    >
      <Box marginBottom="50px">
        <SearchByInput />
      </Box>
      {success && (
        <Grid
          margin="auto"
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, minmax(220px, 240px))',
            'repeat(3, minmax(220px, 240px))',
            'repeat(4, minmax(220px, 240px))',
          ]}
          gap={6}
          width="fit-content"
        >
          {filteredUsers.map(user => {
            const { id } = user;
            return (
              <GridItem key={id} boxShadow="dark-lg" borderRadius="8px">
                <SingleUser {...user} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default observer(Users);
