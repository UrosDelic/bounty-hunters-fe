import TaskDetails from '../../components/my-tasks/TaskDetails';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import TasksStore from '../../stores/tasks';
import { observer } from 'mobx-react';

const TaskDetailsPage = () => {
  const { tasksById } = TasksStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      TasksStore.getTaskDetailsById(id);
    }
  }, [id]);
  return (
    <Flex justify="center">
      {tasksById && <TaskDetails task={tasksById} />}
    </Flex>
  );
};

export default observer(TaskDetailsPage);
