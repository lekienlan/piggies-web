import 'moment/locale/vi';

import { Box } from '@mui/material';
import { useMemo } from 'react';
import type { ICustomInput } from 'types';

import ButtonSelect from './ButtonSelect';
import CheckboxInput from './Checkbox';
import DatePickerInput from './DatePickerInput';
import MultiSelectInput from './MultiSelectInput';
import NumberInput from './NumberInput';
import RadioInput from './RadioInput';
import SingleSelectInput from './SingleSelect';
import Stepper from './Stepper';
import Switch from './Switch';
import TextInput from './TextInput';
import ToggleInput from './ToggleInput';

export default function CustomInput(props: ICustomInput) {
  const memoInput = useMemo(() => {
    const { inputType, options, sx, component, toggle } = props;

    if (toggle) return <ToggleInput {...props} />;
    if (component) return component(props);

    switch (inputType) {
      case 'switch':
        return <Switch {...props} />;
      case 'buttonSelect':
        return <ButtonSelect {...props} />;
      case 'checkbox':
        return <CheckboxInput {...props} />;
      case 'radio':
        return <RadioInput {...props} />;
      case 'singleSelect':
        return <SingleSelectInput {...props} />;
      case 'multiSelect':
        return <MultiSelectInput {...props} onChange={() => {}} />;
      case 'datepicker':
        return <DatePickerInput {...props} />;
      case 'number':
        return <NumberInput {...props} />;
      case 'text':
        return <TextInput {...props} />;
      case 'textarea':
        return <TextInput {...props} multiline />;
      case 'stepper':
        return <Stepper {...props} />;

      default:
        return (
          <Box sx={sx}>
            {options?.map((option) => (
              <CustomInput key={option.code} {...option} sx={option.sx} />
            ))}
          </Box>
        );
    }
  }, [props]);

  return memoInput;
}
