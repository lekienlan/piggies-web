import { Box, Icon, MenuItem, Select, Typography } from '@mui/material';
import type { ICustomInput } from 'types';

import CheckboxInput from './Checkbox';

export default function MultiSelectInput(
  props: ICustomInput & {
    values?: string[];
    onChange?: (values: string[]) => void;
    renderSelectItem?: (
      item: ICustomInput,
      values: string[]
    ) => React.ReactNode | null;
    renderValues?: (
      options: ICustomInput[],
      values: string[]
    ) => React.ReactNode | null;
  }
) {
  const {
    sx,
    values = [],
    options,
    onChange,
    renderSelectItem,
    renderValues,
    selected
  } = props;

  const renderValueString = (_values: string[]) => {
    if (values.length > 3) {
      return [
        ..._values
          .slice(0, 3)
          .map(
            (value) => options?.find((option) => option.code === value)?.name
          ),
        `+${values.length - 3}`
      ].join(', ');
    }

    return _values
      .map((value) => options?.find((option) => option.code === value)?.name)
      .join(', ');
  };

  return (
    <Select
      onChange={(e) => onChange && onChange(e.target.value as string[])}
      sx={{
        width: '100%',
        ...sx
      }}
      multiple
      value={values}
      displayEmpty
      IconComponent={(iconProps) => {
        return (
          <Icon
            className={`ri-arrow-down-s-line ${iconProps.className}`}
          ></Icon>
        );
      }}
      renderValue={() =>
        renderValues ? (
          renderValues(options ?? [], values)
        ) : (
          <Typography variant="bodyS">{renderValueString(values)}</Typography>
        )
      }
    >
      {options?.map((option: ICustomInput) => (
        <MenuItem key={option.code} value={option.code}>
          <Box display="flex" alignItems="center">
            <CheckboxInput
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 0
              }}
              selected={selected ?? values.includes(option.code ?? '')}
            />
            <Box sx={{ mr: 2 }} />
            {renderSelectItem ? (
              renderSelectItem(option, values)
            ) : (
              <Typography variant="bodyS">{option.name}</Typography>
            )}
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
