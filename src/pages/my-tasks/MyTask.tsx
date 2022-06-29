import { Box, Text, Heading, Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import TasksStore from '../../stores/tasks';
import { Link } from 'react-router-dom';
import MyTask from '../../components/my-tasks/MyTask';
import { observer } from 'mobx-react';
import { SearchByInput, SpinnerLoader } from 'components';
import InfiniteScroll from 'react-infinite-scroll-component';
import dayjs from 'dayjs';

const MyTasksPage = () => {
  const { loading, tasks, hasMore } = TasksStore;

  useEffect(() => {
    TasksStore.getMyTasks();
  }, []);

  return (
    <Box
      margin="auto"
      marginTop="50px"
      maxWidth="1200px"
      width="fit-content"
      padding="0px 25px 25px"
    >
      <Heading as="h1" textAlign="center" marginTop="50px" marginBottom="50px">
        My Tasks
      </Heading>
      <Box marginBottom="50px">
        <SearchByInput />
      </Box>

      {loading ? <SpinnerLoader /> : null}
      <InfiniteScroll
        dataLength={tasks.length}
        next={() => TasksStore.loadMoreTasks()}
        hasMore={hasMore}
        loader={<h3>loading...</h3>}
      >
        <Grid
          margin="auto"
          templateColumns={[
            'repeat(1, minmax(auto, auto))',
            'repeat(2, minmax(auto, auto))',
          ]}
          gap={5}
          width="fit-content"
          p={2}
        >
          {tasks
            ? tasks.map(task => (
                <GridItem key={task.id} borderRadius="8px">
                  <Link key={task.id} to={`/task-details/${task.id}`}>
                    <MyTask
                      key={task.id}
                      title={task.title}
                      description={task.description}
                      status={task.status}
                      createdAt={dayjs(task.createdAt).format('DD-MM-YYYY')}
                      updatedAt={dayjs(task.updatedAt).format('DD-MM-YYYY')}
                      points={task.points}
                    ></MyTask>
                  </Link>
                </GridItem>
              ))
            : null}
        </Grid>
      </InfiniteScroll>

      {!loading && tasks.length === 0 ? <Text>No tasks data</Text> : null}
    </Box>
  );
};

export default observer(MyTasksPage);
