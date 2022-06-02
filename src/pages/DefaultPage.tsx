import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { UserTypes } from '../context/userTypes';

function DefaultPage() {
  const { userRoles } = useAppContext();
  const location = useLocation();

  if (userRoles?.includes(UserTypes.EMPLOYEE)) {
    return <Navigate to="/feed" state={{ from: location }} replace />;
  }

  if (userRoles?.includes(UserTypes.ADMIN)) {
    return <Navigate to="/tasks" state={{ from: location }} replace />;
  }

  if (userRoles?.includes(UserTypes.SUPER_ADMIN)) {
    return <Navigate to="/users" state={{ from: location }} replace />;
  }
  return <Navigate to="/" />;
}

export default DefaultPage;
