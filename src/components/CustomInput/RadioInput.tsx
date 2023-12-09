import type { RadioProps } from '@mui/material';
import { Box, Radio as MuiRadio, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/system';
import type { ReactElement } from 'react';
import React from 'react';
import COLORS from 'theme/colors';
import type { ICustomInput } from 'types';

import CustomInput from '.';

interface RadioCompProps extends RadioProps {
  label: string | ReactElement;
  labelSx?: SxProps<Theme>;
  helperText?: string;
}

function Radio({
  label,
  onChange,
  checked,
  sx,
  labelSx,
  disabled,
  helperText,
  ...rest
}: RadioCompProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',

        pointerEvents: disabled ? 'none' : undefined,
        ...(sx as SxProps<Theme>)
      }}
    >
      <MuiRadio
        sx={{ opacity: disabled ? 0.5 : 1 }}
        {...rest}
        onChange={onChange}
        checked={checked}
        icon={
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: 100,
              border: `2px solid ${COLORS['content-secondary']}`,
              boxSizing: 'border-box'
            }}
          />
        }
        checkedIcon={
          <Box
            sx={{
              background: COLORS['brand-primary'],
              width: 16,
              height: 16,
              borderRadius: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                background: 'white',
                width: 6,
                height: 6,
                borderRadius: 100
              }}
            ></Box>
          </Box>
        }
      />
      <Box sx={{ ml: 2 }}></Box>
      <Box>
        <Typography component="div" sx={labelSx} variant="bodyS">
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

export default function RadioInput(props: ICustomInput) {
  const {
    disabled,
    sx,
    code,
    onChange,
    value,
    options,
    name,
    selected,
    helperText,
    inputType
  } = props;

  if (!options)
    return (
      <Box
        sx={{ mb: 2, cursor: 'pointer' }}
        onClick={() => {
          if (onChange && !disabled) onChange(code ?? '');
        }}
      >
        <Radio
          disabled={disabled}
          checked={selected ?? code === value}
          label={name ?? ''}
          value={value}
          helperText={helperText}
        />
        {helperText && (
          <Typography ml={6} variant="bodyXS" color="text.tertiary">
            {helperText}
          </Typography>
        )}
      </Box>
    );

  return (
    <Box sx={sx}>
      {options?.map((option) => (
        <Box key={option.code}>
          <CustomInput
            {...option}
            inputType={option.inputType || inputType || 'radio'}
            options={undefined}
            onChange={onChange}
            value={option.value || value}
          />

          {option.options && (
            <Box sx={{ ml: 6 }}>
              {option.options.map((subOption, index) => {
                return (
                  <CustomInput
                    key={index}
                    {...subOption}
                    selected={subOption.selected || option.selected}
                    inputType={
                      subOption.inputType || option.inputType || inputType
                    }
                    onChange={subOption.onChange || option.onChange || onChange}
                    value={subOption.value || option.value || value}
                  />
                );
              })}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
