import { Grid, ListItemButton, ListItemText } from '@mui/material';
import type { ICustomInput } from 'types';

import CustomInput from '.';

export default function ButtonSelectInput(props: ICustomInput) {
  const {
    disabled,
    sx,
    code,
    onChange,
    value,
    options,
    name,
    inputType,
    selected
  } = props;

  if (!options)
    return (
      <ListItemButton
        disabled={disabled}
        onClick={(_) => {
          if (onChange) onChange(code ?? '');
        }}
        selected={selected ?? value === code}
        sx={sx}
      >
        <ListItemText sx={{ textAlign: 'center' }} primary={name} />
      </ListItemButton>
    );
  return (
    <Grid container sx={sx}>
      {options?.map((option, index, array) => (
        <Grid key={index} item xs={12 / array.length}>
          <CustomInput
            value={value}
            {...option}
            disabled={option.disabled || disabled}
            onChange={onChange}
            inputType={inputType}
            sx={{
              borderTopLeftRadius: index === 0 ? '4px' : 0,
              borderBottomLeftRadius: index === 0 ? '4px' : 0,
              borderTopRightRadius: index === array.length - 1 ? '4px' : 0,
              borderBottomRightRadius: index === array.length - 1 ? '4px' : 0
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
