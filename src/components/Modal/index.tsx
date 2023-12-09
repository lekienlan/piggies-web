import type { SxProps, Theme } from '@mui/material';
import { Box, Grow, Modal as MuiModal } from '@mui/material';
import React from 'react';

export interface IModal {
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
  sx?: SxProps<Theme>;
}
export default function Modal({ open, onClose, children, sx }: IModal) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Grow timeout={200} in={open}>
        <Box
          sx={{
            borderRadius: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 400,
            bgcolor: 'background.paper',
            border: 'text.border',
            boxShadow: 24,
            p: 4,
            ...sx
          }}
        >
          {children}
        </Box>
      </Grow>
    </MuiModal>
  );
}
