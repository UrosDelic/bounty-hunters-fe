import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { UserTypes } from '../context/userTypes';

type AllowedRolesProp = {
  allowedRoles: Array<UserTypes>;
};

function ProtectedRoute({ allowedRoles }: AllowedRolesProp) {
  const { userRole } = useAppContext();
  const location = useLocation();

  if (!userRole) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.includes(userRole)) {
    return <Outlet />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
}

export default ProtectedRoute;
