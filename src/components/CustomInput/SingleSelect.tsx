import { Icon, MenuItem, Select, Typography } from '@mui/material';
import type { ICustomInput } from 'types';

export default function SingleSelectInput(
  props: ICustomInput & {
    renderSelectItem?: (
      item: ICustomInput,
      value: string
    ) => React.ReactNode | null;
    renderValue?: (
      options: ICustomInput[],
      value: string
    ) => React.ReactNode | null;
  }
) {
  const {
    sx,
    value,
    options,
    disabled,
    onChange,
    renderSelectItem,
    renderValue
  } = props;

  return (
    <Select
      sx={{
        width: '100%',
        ...sx
      }}
      onChange={(e) => onChange && onChange(e.target.value)}
      MenuProps={{
        sx: {
          '.MuiPopover-paper': {
            maxHeight: 200
          }
        }
      }}
      displayEmpty
      disabled={disabled}
      value={value}
      IconComponent={(iconProps) => {
        return (
          <Icon
            className={`ri-arrow-down-s-line ${iconProps.className}`}
          ></Icon>
        );
      }}
      renderValue={() =>
        renderValue ? (
          renderValue(options ?? [], value ?? '')
        ) : (
          <Typography variant="bodyS">
            {options?.find((option) => option.code === value)?.name ?? value}
          </Typography>
        )
      }
    >
      {options?.map((option) => (
        <MenuItem key={option.code} value={option.code}>
          {renderSelectItem ? (
            renderSelectItem(option, value ?? '')
          ) : (
            <Typography variant="bodyS">{option.name}</Typography>
          )}
        </MenuItem>
      ))}
    </Select>
  );
}
