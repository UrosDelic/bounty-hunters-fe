import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import { AppProvider } from './context/appContext';
import { ErrorBoundary } from './components/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <ColorModeScript />
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
