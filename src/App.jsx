import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/feed" element={<div>feed</div>} />
            <Route path="/new-tasks" element={<div>new tasks</div>} />
            <Route path="/my-tasks" element={<div>my tasks</div>} />
            <Route path="/wallet" element={<div>wallet</div>} />
            <Route path="/store" element={<div>store</div>} />
            <Route path="/my-orders" element={<div>my orders</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
