import { Navigate, useLocation } from 'react-router-dom';
import Login from 'stores/Login';
import { Roles } from 'types';

function DefaultPage() {
  const location = useLocation();

  if (Login.hasRole(Roles.EMPLOYEE)) {
    return <Navigate to="/feed" state={{ from: location }} replace />;
  }

  if (Login.hasRole(Roles.ADMIN)) {
    return <Navigate to="/tasks" state={{ from: location }} replace />;
  }

  if (Login.hasRole(Roles.SUPER_ADMIN)) {
    return <Navigate to="/users" state={{ from: location }} replace />;
  }

  return <Navigate to="/404" state={{ from: location }} replace />;
}

export default DefaultPage;
