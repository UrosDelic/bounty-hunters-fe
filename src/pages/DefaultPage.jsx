import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import userTypes from '../context/userTypes';

function DefaultPage() {
  const { user } = useAppContext();
  const location = useLocation();

  if (user === userTypes.EMPLOYEE) {
    return <Navigate to="/feed" state={{ from: location }} replace />;
  }

  if (user === userTypes.ADMIN) {
    return <Navigate to="/tasks" state={{ from: location }} replace />;
  }

  if (user === userTypes.EMPLOYEE) {
    return <Navigate to="/users" state={{ from: location }} replace />;
  }
}

export default DefaultPage;
