import TaskDetails from '../../components/my-tasks/TaskDetails';
import { useParams } from 'react-router-dom';
import TasksService from '../../services/tasks';
import { useEffect } from 'react';

const TaskDetailsPage = () => {
  const service = new TasksService();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      service.getTasksById(id);
    }
  });
  return <TaskDetails />;
};

export default TaskDetailsPage;
