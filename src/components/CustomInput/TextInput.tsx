import { Box, TextField } from '@mui/material';
import React, { useMemo } from 'react';
import type { ICustomInput } from 'types';

export default function TextInput(
  props: ICustomInput & { multiline?: boolean; autoFocus?: boolean }
) {
  const {
    sx,
    code,
    onChange,
    value,
    placeholder,
    suffix,
    prefix,
    multiline,
    autoFocus,
    disabled,
    helperText
  } = props;

  const memoInput = useMemo(() => {
    return (
      <TextField
        autoFocus={autoFocus}
        disabled={disabled}
        helperText={helperText}
        multiline={multiline}
        name={code}
        sx={{
          opacity: disabled ? 0.5 : 1,
          width: '100%',
          '& .MuiInputBase-root': {
            height: '100%',
            py: multiline ? 2 : 0,
            px: multiline ? 0 : undefined,
            background: 'white'
          },

          ...sx
        }}
        minRows={multiline ? 2 : undefined}
        maxRows={Infinity}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        InputProps={{
          startAdornment: prefix && <Box sx={{ left: '8px' }}>{prefix}</Box>,
          endAdornment: suffix && (
            <Box sx={{ position: 'absolute', right: '8px' }}>{suffix}</Box>
          )
        }}
        placeholder={placeholder}
      />
    );
  }, [value, code, suffix, prefix, helperText, sx]);

  return memoInput;
}
