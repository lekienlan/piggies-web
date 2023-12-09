import './index.css';
import 'remixicon/fonts/remixicon.css';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <StyledEngineProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
  // </React.StrictMode>
);
