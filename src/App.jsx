import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import { Layout } from './components';
import Feed from './components/user/Feed';
import theme from './theme';
function App() {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ColorModeScript />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/feed" element={<Feed />} />
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
