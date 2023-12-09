import type { AlertColor } from '@mui/material';
import { create } from 'zustand';

export interface SnackbarStore {
  open: boolean;
  message: string;
  severity: AlertColor;
  showSnackbar: (message: string, severity?: AlertColor) => void;
  closeSnackbar: () => void;
}

const useSnackbarStore = create<SnackbarStore>((set) => ({
  open: false,
  message: '',
  severity: 'error',
  showSnackbar: (message: string, severity = 'error') => {
    set({ open: true, message, severity });
  },
  closeSnackbar: () => {
    set({ open: false });
  }
}));
export default useSnackbarStore;
