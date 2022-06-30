import { Grid, GridItem, Box } from '@chakra-ui/react';
import { SingleUser, SpinnerLoader, SearchByInput } from '../components/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import UsersStore from '../stores/users';
import RolesStore from '../stores/roles';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function Users() {
  const { loading, success, users, hasMore } = UsersStore;

  useEffect(() => {
    UsersStore.getUsers();
    RolesStore.getRoles();
  }, []);

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
      <InfiniteScroll
        dataLength={users.length}
        next={() => UsersStore.loadMoreUsers()}
        hasMore={hasMore}
        loader={<h3>loading...</h3>}
      >
        {success && (
          <Grid
            margin="auto"
            templateColumns={[
              'repeat(1, minmax(220px, 350px))',
              'repeat(2, minmax(200px, 240px))',
              'repeat(3, minmax(220px, 240px))',
              'repeat(4, minmax(220px, 240px))',
            ]}
            gap={5}
            width="fit-content"
            p={2}
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
      </InfiniteScroll>
    </Box>
  );
}

export default observer(Users);
