import { observer } from 'mobx-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import loginStore from 'stores/Login';
import Login from 'components/Login';
import { Roles } from 'types';

//import { useAppContext } from '../context/appContext';
//import { UserTypes } from '../context/userTypes';

type AllowedRolesProp = {
  allowedRoles: Array<Roles>;
  children?: any;
};

function ProtectedRoute({ allowedRoles, children }: AllowedRolesProp) {
  const { isAuth } = loginStore;
  const location = useLocation();

  // if (!isAuth) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }
  if (isAuth) {
    if (allowedRoles.some(role => loginStore.hasRole(role))) {
      return <Outlet />;
    }
  }
  if (!isAuth) {
    return <Login />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
}

export default observer(ProtectedRoute);
