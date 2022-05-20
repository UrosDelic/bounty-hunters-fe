import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import { AppProvider } from './context/appContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AppProvider>
      <ColorModeScript />
      <App />
    </AppProvider>
  </StrictMode>
);
