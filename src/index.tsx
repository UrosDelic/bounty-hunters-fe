/* global google */

import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import { ErrorBoundary } from './components/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ErrorBoundary>
    <ColorModeScript />
    <App />
  </ErrorBoundary>
);
