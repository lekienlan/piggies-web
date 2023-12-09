import { Box, Typography } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dialog from 'components/Dialog';
import Markdown from 'components/Markdown';
import Snackbar from 'components/Snackbar';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';
import useDialogStore from 'stores/dialog';

import changelog from '../changelog.md';
import packageJson from '../package.json';

export default function App() {
  const { showDialog } = useDialogStore();
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />

      {/* EnvVersion */}
      <Box position="fixed" bottom={0} left={0} m={2} zIndex={2000}>
        <Typography variant="body2XS" color="text.tertiary">
          {process.env.NODE_ENV} ·{' '}
          <Box
            sx={{ cursor: 'pointer' }}
            component="span"
            onClick={() => {
              showDialog({
                title: 'Có gì mới?',
                content: <Markdown mdFile={changelog} />,
                confirmText: 'OK'
              });
            }}
          >
            {packageJson.version}
          </Box>
        </Typography>
      </Box>

      {/* Component to show snackbar, using useSnackbarStore */}
      <Snackbar />

      {/* Component to show dialog, using useDialogStore */}
      <Dialog />
    </QueryClientProvider>
  );
}
