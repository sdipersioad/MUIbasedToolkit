import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createToolkitTheme } from '@autodesk/ui-toolkit';
import App from './App';
import './index.css';

const theme = createToolkitTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
