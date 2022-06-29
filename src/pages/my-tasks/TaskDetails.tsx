import TaskDetails from '../../components/my-tasks/TaskDetails';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
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
    <Flex direction="column" justify="center" align="center">
      {loading ? <SpinnerLoader /> : null}
      {tasksById && !loading ? (
        <>
          <Heading
            as="h1"
            textAlign="center"
            marginTop="50px"
            marginBottom="50px"
          >
            Task details
          </Heading>
          <TaskDetails task={tasksById} />
        </>
      ) : null}
    </Flex>
  );
};

export default observer(TaskDetailsPage);
