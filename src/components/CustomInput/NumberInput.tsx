import { Box, TextField } from '@mui/material';
import React, { useMemo } from 'react';
import type { NumericFormatProps } from 'react-number-format';
import { NumericFormat } from 'react-number-format';
import type { ICustomInput } from 'types';

const CustomNumericFormat = React.forwardRef<
  NumericFormatProps,
  {
    onChange?: (event: { target: { name: string; value: string } }) => void;
    name?: string;
    value?: string;
    prefix?: string;
    suffix?: string;
  }
>(function CustomNumericFormat(props, ref) {
  const { onChange, value, suffix, ...other } = props;

  return (
    <Box display="flex" width="100%" alignItems="center">
      <NumericFormat
        // isAllowed={({ floatValue }) => (floatValue || 0) < 50}
        {...other}
        value={value || ''}
        getInputRef={ref}
        onValueChange={(values) => {
          if (!onChange) return;
          onChange({
            target: {
              name: props.name ?? '',
              value: values.value
            }
          });
        }}
        thousandSeparator
        valueIsNumericString
      />
      {suffix && <Box sx={{ mx: 2 }}> {suffix}</Box>}
    </Box>
  );
});

export default function NumberInput(props: ICustomInput) {
  const {
    sx,
    code,
    onChange,
    value,
    placeholder,
    disabled,
    helperText,
    error,
    suffix,
    prefix
  } = props;

  const memoInput = useMemo(() => {
    return (
      <TextField
        error={error}
        helperText={helperText}
        name={code}
        sx={{
          width: '100%',
          opacity: disabled ? 0.5 : 1,
          ...sx
        }}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        InputProps={{
          inputComponent: CustomNumericFormat as any,
          inputProps: { ...props, sx: undefined } as any
        }}
      />
    );
  }, [value, code, suffix, prefix, helperText, error, sx]);

  return memoInput;
}
