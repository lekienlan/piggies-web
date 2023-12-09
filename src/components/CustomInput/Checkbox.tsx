import type { RadioProps } from '@mui/material';
import { Box, Checkbox as MuiCheckbox, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/system';
import type { ReactElement } from 'react';
import type { ICustomInput } from 'types';

import CustomInput from '.';

interface CheckboxCompProps extends RadioProps {
  label: string | ReactElement;
  labelSx?: SxProps<Theme>;
}

function Checkbox({
  label,
  labelSx,
  onChange,
  checked,
  disabled,
  sx,
  ...rest
}: CheckboxCompProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',

        pointerEvents: disabled ? 'none' : undefined,
        ...(sx as SxProps<Theme>)
      }}
    >
      <MuiCheckbox
        sx={{ p: 0, opacity: disabled ? 0.5 : 1 }}
        {...rest}
        onChange={onChange}
        checked={checked}
      />
      <Box sx={{ ml: 2 }}></Box>
      <Typography sx={labelSx} variant="bodyS">
        {label}
      </Typography>
    </Box>
  );
}

export default function CheckboxInput(props: ICustomInput) {
  const {
    disabled,
    sx,
    code,
    onChange,
    value,
    options,
    name,
    labelSx,
    inputType,
    selected,
    helperText
  } = props;

  if (!options)
    return (
      <Box
        sx={{ mb: 2, cursor: 'pointer' }}
        onClick={() => {
          if (onChange && !disabled) onChange(code ?? '');
        }}
      >
        <Checkbox
          checked={selected ?? value === code}
          disabled={disabled}
          labelSx={labelSx}
          sx={{ mb: 2, ...sx }}
          label={name ?? ''}
        />
        {helperText && (
          <Typography ml={6} variant="bodyXS" color="text.tertiary">
            {helperText}
          </Typography>
        )}
      </Box>
    );
  return (
    <Box>
      {options?.map((option) => (
        <Box key={option.code}>
          <CustomInput
            {...option}
            inputType={option.inputType || inputType}
            disabled={option.disabled || disabled}
            options={undefined}
            onChange={onChange}
            value={option.value || value}
          />

          {option.options && (
            <Box sx={{ ml: 8 }}>
              {option.options.map((subOption, index) => (
                <CustomInput
                  key={index}
                  {...subOption}
                  disabled={subOption.disabled || option.disabled || disabled}
                  selected={subOption.selected || option.selected}
                  inputType={
                    subOption.inputType || option.inputType || inputType
                  }
                  onChange={subOption.onChange || option.onChange || onChange}
                  value={subOption.value || option.value || value}
                />
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
