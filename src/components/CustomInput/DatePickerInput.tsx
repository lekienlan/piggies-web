import { Box, Grid, Icon, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { Moment } from 'moment';
import moment from 'moment';
import { useMemo } from 'react';
import type { ICustomInput } from 'types';

import CustomInput from '.';

export default function DatePickerInput(props: ICustomInput) {
  const { options, onChange, value, sx, disabled, code, extraProps } = props;

  const memoDateInput = useMemo(() => {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'vi'}>
        <DateTimePicker
          disablePast
          slotProps={{
            textField: {
              variant: 'outlined',
              sx: {
                width: '100%',
                ...sx
              }
            },
            openPickerIcon: (
              <Icon
                sx={{ color: 'black' }}
                className="ri-calendar-event-line"
              ></Icon>
            )
          }}
          disabled={disabled}
          ampm={false}
          onChange={(v: Moment | null) => {
            if (moment(v).isAfter(moment())) {
              if (onChange) onChange(moment(v).toISOString(true));
            }
          }}
          value={value ? moment(value) : null}
          format="DD/MM/YYYY HH:mm"
          minDate={extraProps?.minDate}
          maxDate={extraProps?.maxDate}
        />
      </LocalizationProvider>
    );
  }, [value, code]);

  if (!options) {
    return memoDateInput;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'vi'}>
      <Grid container spacing={4}>
        {options?.map((option) => (
          <Grid item xs={6} key={option.code}>
            <Typography variant="bodyS" fontWeight="medium">
              {option.name}
            </Typography>
            <Box sx={{ mb: 1 }} />
            <CustomInput {...option} inputType="datepicker" />
          </Grid>
        ))}
      </Grid>
    </LocalizationProvider>
  );
}
