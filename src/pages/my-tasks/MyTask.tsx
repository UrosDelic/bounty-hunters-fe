import { Box, Text, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import TasksStore from '../../stores/tasks';
import { Link } from 'react-router-dom';
import SingleTask from '../../components/SingleTask';
import { observer } from 'mobx-react';
import { SpinnerLoader } from 'components';

const MyTasksPage = () => {
  const { loading, myTasks } = TasksStore;

  useEffect(() => {
    TasksStore.getMyTasks();
  }, []);

  return (
    <Box
      marginTop="1rem"
      className="my-tasks-page"
      display="flex"
      alignItems={['center', 'center']}
      flexDirection="column"
    >
      <Heading as="h1" textAlign="center" marginTop="50px" marginBottom="50px">
        My Tasks
      </Heading>
      <>
        {loading ? (
          <SpinnerLoader />
        ) : (
          myTasks.map(({ task, createdAtDate, updatedAtDate }) => (
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
        {!loading && myTasks.length === 0 ? <Text>No tasks data</Text> : null}
      </>
    </Box>
  );
};

export default observer(MyTasksPage);
