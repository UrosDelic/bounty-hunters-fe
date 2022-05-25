import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import userTypes from '../context/userTypes';

function DefaultPage() {
  const { userRole } = useAppContext();
  const location = useLocation();

  if (userRole === userTypes.EMPLOYEE) {
    return <Navigate to="/feed" state={{ from: location }} replace />;
  }

  if (userRole === userTypes.ADMIN) {
    return <Navigate to="/tasks" state={{ from: location }} replace />;
  }

  if (userRole === userTypes.SUPERADMIN) {
    return <Navigate to="/users" state={{ from: location }} replace />;
  }
}

export default DefaultPage;
