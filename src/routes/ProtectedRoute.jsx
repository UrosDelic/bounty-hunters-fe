import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

function ProtectedRoute({ allowedRoles }) {
  const { user } = useAppContext();
  const location = useLocation();

  if (allowedRoles.includes(user)) {
    return <Outlet />;
  }

  if (user) {
    return <Navigate to="/feed" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default ProtectedRoute;
