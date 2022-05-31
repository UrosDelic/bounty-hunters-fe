import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { UserTypes } from '../context/userTypes';

type AllowedRolesProp = {
  allowedRoles: Array<UserTypes>;
};

function ProtectedRoute({ allowedRoles }: AllowedRolesProp) {
  const { userRoles } = useAppContext();
  const location = useLocation();

  if (!userRoles) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (userRoles.some(role => allowedRoles.includes(role))) {
    return <Outlet />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
}

export default ProtectedRoute;
