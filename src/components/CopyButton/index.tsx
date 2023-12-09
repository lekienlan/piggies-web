import type { SxProps, Theme } from '@mui/material';
import { Icon, IconButton, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface ICopyButton {
  value?: string | number;
  sx?: SxProps<Theme>;
  title?: string;
}

export default function CopyButton({ value, sx, title }: ICopyButton) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    <Tooltip title={value?.toString()}>
      <IconButton
        sx={{
          color: 'primary.main',
          borderRadius: '20px',

          ...sx
        }}
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(value?.toString() || '');
          setIsCopied(true);
        }}
      >
        {title ? (
          <Typography
            sx={{
              '&.MuiTypography-root': { color: 'inherit !important' },
              mr: 1
            }}
            variant="bodyXS"
          >
            {title}
          </Typography>
        ) : null}

        <Icon
          sx={{
            display: 'unset',
            fontSize: 14,
            '&.MuiIcon-root': {
              color: 'inherit  !important'
            }
          }}
          component="span"
          className={isCopied ? 'ri-check-line' : 'ri-file-copy-line'}
        ></Icon>
      </IconButton>
    </Tooltip>
  );
}
