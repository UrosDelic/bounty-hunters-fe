import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

function ProtectedRoute({ allowedRoles }) {
  const { userRole } = useAppContext();
  const location = useLocation();

  if (!userRole) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.includes(userRole)) {
    return <Outlet />;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
}

export default ProtectedRoute;
