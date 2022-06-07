import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
// import TasksService from '../../services/tasks';
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

  // if (loading) {
  //   return <SpinnerLoader />;
  // }

  return (
    <Box display="flex" flexDirection="row">
      <>
        {loading && <SpinnerLoader />}
        {tasks ? (
          tasks.map(task => (
            <Link key={task.id} to={`/task-details/${task.id}`}>
              <MyTask
                key={task.id}
                headline={task.title}
                text={task.description}
                status={task.status}
              ></MyTask>
            </Link>
          ))
        ) : (
          <Text>No tasks data</Text>
        )}
      </>
    </Box>
  );
};

export default observer(MyTasksPage);
