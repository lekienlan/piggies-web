import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export default function LoadingIndicator({
  size,
  color = 'primary.main'
}: {
  color?: string;
  size?: number;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2
      }}
    >
      <CircularProgress size={size ?? 24} sx={{ color }} />
    </Box>
  );
}
