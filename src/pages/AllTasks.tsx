import React from 'react';
import SingleTask from '../components/SingleTask';
import { Box, Heading, Text } from '@chakra-ui/react';
import { SpinnerLoader } from 'components';
import tasksStore from 'stores/tasks';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
const AllTasks = () => {
  useEffect(() => {
    tasksStore.getAllTasks();
  }, []);
  const { loading, allTasks } = tasksStore;
  return (
    <Box
      marginTop="1rem"
      className="my-tasks-page"
      display="flex"
      alignItems={['center', 'center']}
      flexDirection="column"
    >
      <Heading as="h1" textAlign="center" marginTop="50px" marginBottom="50px">
        All Tasks{' '}
      </Heading>
      <>
        {loading ? (
          <SpinnerLoader />
        ) : (
          allTasks.map(({ task, createdAtDate, updatedAtDate }) => (
            <Link key={task.id} to={`/task-details/${task.id}`}>
              <SingleTask
                key={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                createdAt={createdAtDate}
                updatedAt={updatedAtDate}
                points={task.points}
              ></SingleTask>
            </Link>
          ))
        )}
        {!loading && allTasks.length === 0 ? <Text>No tasks data</Text> : null}
      </>
    </Box>
  );
};
export default observer(AllTasks);
