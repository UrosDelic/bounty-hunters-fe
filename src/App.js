import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                test
                <ColorModeSwitcher></ColorModeSwitcher>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
