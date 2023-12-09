import { Box, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import type { ICustomInput } from 'types';

import CustomInput from '.';

export default function ToggleInput(props: ICustomInput) {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setToggled(!!(props.selected ?? props.value));
  }, [props.selected, props.value]);

  const renderInput = () => {
    if (!toggled) return null;
    if (props.component) return props.component(props);

    return <CustomInput {...props} toggle={false} />;
  };

  return (
    <Box>
      <Switch
        disabled={props.disabled}
        checked={toggled}
        sx={props.toggleSx}
        onChange={() => {
          if (props.onChange) props.onChange('');
          setToggled(!toggled);
        }}
      />
      {renderInput()}
    </Box>
  );
}
