import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<div>test</div>}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
