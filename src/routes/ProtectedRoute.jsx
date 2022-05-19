import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

function ProtectedRoute({ allowedRoles }) {
  const { user } = useAppContext();

  if (allowedRoles.includes(user)) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
