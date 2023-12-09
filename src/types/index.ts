import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/system';
import type { ReactElement } from 'react';

export type InputType =
  | 'switch'
  | 'datepicker'
  | 'checkbox'
  | 'radio'
  | 'text'
  | 'number'
  | 'multiSelect'
  | 'singleSelect'
  | 'buttonSelect'
  | 'textarea'
  | 'image'
  | 'products'
  | 'coupon'
  | 'categories'
  | 'color'
  | 'color-minimize'
  | 'stepper';

export interface ICustomInput {
  inputType?: InputType;
  helperText?: string;
  options?: ICustomInput[];
  disabled?: boolean;
  name?: string | ReactElement;
  code?: string;
  error?: boolean;
  sx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
  toggleSx?: SxProps<Theme>;
  subName?: string;
  value?: string;
  selected?: boolean;
  toggle?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  extraProps?: Record<string, any>;
  onChange?: (value: string) => void;
  component?: (props: ICustomInput) => React.ReactElement | null;
}
