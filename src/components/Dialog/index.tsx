import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  Typography
} from '@mui/material';
import React from 'react';
import useDialogStore from 'stores/dialog';

export default function Dialog() {
  const {
    open,
    title,
    content,
    cancelText,
    confirmText,
    confirmColor,
    onCancel,
    onConfirm
  } = useDialogStore();

  return (
    <MuiDialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Typography variant="headingM" component="div" mb={2}>
          {title}
        </Typography>
        <Typography variant="bodyS">{content}</Typography>
      </DialogContent>
      <DialogActions sx={{ p: 4 }}>
        <Button variant="outlined" onClick={onCancel}>
          {cancelText ?? 'Huỷ'}
        </Button>
        <Button variant="contained" color={confirmColor} onClick={onConfirm}>
          {confirmText ?? 'Đồng ý'}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}
