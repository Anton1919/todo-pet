import { memo } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

export const DatePickerUI = memo(function DatePickerUI() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Date"
          format={'dd.MM.yyyy'}
          minDate={new Date(2025, 0, 1)}
          maxDate={new Date(2027, 0, 1)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
});
