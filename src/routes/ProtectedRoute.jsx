import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

function ProtectedRoute({ allowedRoles }) {
  const { user } = useAppContext();
  const location = useLocation();

  if (allowedRoles.includes(user)) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default ProtectedRoute;
