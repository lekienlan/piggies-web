import { Switch } from '@mui/material';
import type { ICustomInput } from 'types';

export default function SwitchInput(props: ICustomInput) {
  const { disabled, sx, code, onChange, value, selected } = props;

  return (
    <Switch
      checked={selected ?? value === code}
      sx={sx}
      disabled={disabled}
      onChange={(_, checked) =>
        onChange && (checked ? onChange(code ?? '') : onChange(''))
      }
    />
  );
}
