import { observer } from 'mobx-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Login from 'stores/Login';
import { Roles } from 'types';
//import { useAppContext } from '../context/appContext';
//import { UserTypes } from '../context/userTypes';

type AllowedRolesProp = {
  allowedRoles: Array<Roles>;
  children?: any;
};

function ProtectedRoute({ allowedRoles, children }: AllowedRolesProp) {
  //const { userRoles } = useAppContext();
  const location = useLocation();

  // if (!isAuth) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  if (allowedRoles.some(role => Login.hasRole(role))) {
    return <Outlet />;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}

export default observer(ProtectedRoute);
