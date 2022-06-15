import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import TasksStore from '../../stores/tasks';
import { Link } from 'react-router-dom';
import MyTask from '../../components/my-tasks/MyTask';
import { observer } from 'mobx-react';
import { SpinnerLoader } from 'components';

const MyTasksPage = () => {
  const { loading, tasks } = TasksStore;

  useEffect(() => {
    TasksStore.getTasks();
  }, []);

  return (
    <Box
      marginTop="1rem"
      className="my-tasks-page"
      display="flex"
      alignItems={['center', 'center']}
      flexDirection="column"
    >
      <>
        {loading ? (
          <SpinnerLoader />
        ) : (
          tasks.map(({ task, createdAtDate, updatedAtDate }) => (
            <Link key={task.id} to={`/task-details/${task.id}`}>
              <MyTask
                key={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                createdAt={createdAtDate}
                updatedAt={updatedAtDate}
                points={task.points}
              ></MyTask>
            </Link>
          ))
        )}
        {!loading && tasks.length === 0 ? <Text>No tasks data</Text> : null}
      </>
    </Box>
  );
};

export default observer(MyTasksPage);
