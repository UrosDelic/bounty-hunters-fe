import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components';
import Feed from './components/user/Feed';
import {
  DefaultPage,
  NotFound,
  Wallet,
  Store,
  ProductDetails,
  MyOrders,
} from './pages';
import theme from './theme/index';
import ProtectedRoute from './routes/ProtectedRoute';
import { UserTypes } from './context/userTypes';
import MyTasksPage from './pages/MyTasks';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<div>Login</div>} />

          <Route element={<Layout />}>
            <Route
              element={
                <ProtectedRoute
                  allowedRoles={[
                    UserTypes.EMPLOYEE,
                    UserTypes.ADMIN,
                    UserTypes.SUPERADMIN,
                  ]}
                />
              }
            >
              <Route path="/" element={<DefaultPage />} />
            </Route>

            <Route
              element={<ProtectedRoute allowedRoles={[UserTypes.EMPLOYEE]} />}
            >
              <Route path="/feed" element={<Feed />} />
              <Route path="/new-tasks" element={<div>new tasks</div>} />
              <Route path="/my-tasks" element={<MyTasksPage />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:id" element={<ProductDetails />} />
              <Route path="/my-orders" element={<MyOrders />} />
            </Route>

            <Route
              element={<ProtectedRoute allowedRoles={[UserTypes.ADMIN]} />}
            >
              <Route path="/tasks" element={<div>tasks</div>} />
              <Route path="/tasks/:id" element={<div>some task</div>} />
            </Route>

            <Route
              element={<ProtectedRoute allowedRoles={[UserTypes.SUPERADMIN]} />}
            >
              <Route path="/users" element={<div>users</div>} />
              <Route path="/products" element={<div>products</div>} />
              <Route path="/orders" element={<div>orders</div>} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
