import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { UserTypes } from '../context/userTypes';

function DefaultPage() {
  const { userRole } = useAppContext();
  const location = useLocation();

  if (userRole === UserTypes.EMPLOYEE) {
    return <Navigate to="/feed" state={{ from: location }} replace />;
  }

  if (userRole === UserTypes.ADMIN) {
    return <Navigate to="/tasks" state={{ from: location }} replace />;
  }

  if (userRole === UserTypes.SUPERADMIN) {
    return <Navigate to="/users" state={{ from: location }} replace />;
  }
  return <Navigate to="/" />;
}

export default DefaultPage;
