import TaskDetails from '../../components/my-tasks/TaskDetails';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import TasksStore from '../../stores/tasks';
import { observer } from 'mobx-react';
import { SpinnerLoader } from 'components';
const TaskDetailsPage = () => {
  const { loading, tasksById } = TasksStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      TasksStore.getTaskDetailsById(id);
    }
  }, [id]);
  return (
    <Flex justify="center">
      {' '}
      {loading ? <SpinnerLoader /> : null}
      {tasksById && !loading ? <TaskDetails task={tasksById} /> : null}
    </Flex>
  );
};

export default observer(TaskDetailsPage);
