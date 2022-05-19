import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import { Layout } from './components';
import ProtectedRoute from './routes/ProtectedRoute';
import userTypes from './context/userTypes';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<div>Login</div>} />

          <Route element={<Layout />}>
            <Route
              element={<ProtectedRoute allowedRoles={[userTypes.EMPLOYEE]} />}
            >
              <Route path="/feed" element={<div>feed</div>} />
              <Route path="/new-tasks" element={<div>new tasks</div>} />
              <Route path="/my-tasks" element={<div>my tasks</div>} />
              <Route path="/wallet" element={<div>wallet</div>} />
              <Route path="/store" element={<div>store</div>} />
              <Route path="/my-orders" element={<div>my orders</div>} />
            </Route>

            <Route
              element={<ProtectedRoute allowedRoles={[userTypes.ADMIN]} />}
            >
              <Route path="/tasks" element={<div>tasks</div>} />
              <Route path="/tasks/:id" element={<div>some task</div>} />
            </Route>

            <Route
              element={
                <ProtectedRoute allowedRoles={[userTypes.SUPER_ADMIN]} />
              }
            >
              <Route path="/users" element={<div>users</div>} />
              <Route path="/products" element={<div>products</div>} />
              <Route path="/orders" element={<div>orders</div>} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/feed" />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
