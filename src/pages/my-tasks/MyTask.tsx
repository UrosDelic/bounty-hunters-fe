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
      className="my-tasks-page"
      display="flex"
      alignItems={{ sm: 'center' }}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <>
        {loading ? (
          <SpinnerLoader />
        ) : (
          tasks.map(task => (
            <Link key={task.id} to={`/task-details/${task.id}`}>
              <MyTask
                key={task.id}
                headline={task.title}
                description={task.description}
                status={task.status}
                createdAt={task.createdAtDate}
                updatedAt={task.updatedAtDate}
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
