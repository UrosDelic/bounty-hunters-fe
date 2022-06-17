import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Layout, SpinnerLoader } from './components';
import { observer } from 'mobx-react';

import {
  DefaultPage,
  NotFound,
  Wallet,
  Store,
  ProductDetails,
  MyOrders,
  Users,
  Products,
  Orders,
  NewTasks,
  Feed,
} from './pages';
import theme from './theme/index';
import ProtectedRoute from './routes/ProtectedRoute';
import MyTasksPage from './pages/my-tasks/MyTask';
import TaskDetailsPage from './pages/my-tasks/TaskDetails';
import { UserTypes } from './context/userTypes';
import './theme/styles.css';
import Login from 'components/Login';
import LoginStore from 'stores/Login';
import { useEffect } from 'react';
import GoogleLogin from 'components/GoogleLogin';

function App() {
  useEffect(() => {
    console.log('test');
    LoginStore.checkUserFromStorage();
  }, []);
  const { isAuth, authResolved } = LoginStore;

  if (!authResolved) {
    return null;
  }

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {isAuth === true ? (
          <Routes>
            <Route element={<Layout />}>
              <Route
                element={
                  <ProtectedRoute
                    allowedRoles={[
                      UserTypes.EMPLOYEE,
                      UserTypes.ADMIN,
                      UserTypes.SUPER_ADMIN,
                    ]}
                  />
                }
              >
                <Route path="/" element={<DefaultPage />} />
              </Route>
              <Route
                element={<ProtectedRoute allowedRoles={[UserTypes.EMPLOYEE]} />}
              >
                <Route path="/feed/*" element={<Feed />} />
                <Route path="/new-tasks" element={<NewTasks />} />
                <Route path="/my-tasks" element={<MyTasksPage />} />
                <Route path="/task-details/:id" element={<TaskDetailsPage />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/:id" element={<ProductDetails />} />
                <Route path="/my-orders" element={<MyOrders />} />
              </Route>

              <Route
                element={<ProtectedRoute allowedRoles={[UserTypes.ADMIN]} />}
              >
                <Route path="/all-tasks" element={<div>tasks</div>} />
                <Route path="/all-tasks/:id" element={<div>some task</div>} />
              </Route>

              <Route
                element={
                  <ProtectedRoute allowedRoles={[UserTypes.SUPER_ADMIN]} />
                }
              >
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/all-orders" element={<Orders />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          // <GoogleLogin />
          <Login />
        )}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default observer(App);
