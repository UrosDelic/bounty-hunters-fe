import React from 'react';
import TaskDetails from '../../components/my-tasks/task-details';
import { useParams } from 'react-router-dom';
import TasksService from '../../services/tasks';
import { useEffect } from 'react';

const TaskDetailsPage = () => {
  const service = new TasksService();
  const { id } = useParams();
  useEffect(() => {
    service.getTasksById(id);
    console.log(id);
  }, []);
  return <TaskDetails />;
};

export default TaskDetailsPage;
