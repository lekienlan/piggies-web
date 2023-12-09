import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import React from 'react';
import useSnackbarStore from 'stores/snackbar';

export default function Snackbar() {
  const { severity, open, message, closeSnackbar } = useSnackbarStore();

  return (
    <MuiSnackbar
      message={message}
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{
        marginBottom: 10,
        right: '16px !important'
      }}
      onClose={closeSnackbar}
    >
      <Alert onClose={closeSnackbar} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
}
