import s from './CreateModalForm.module.scss';
import { TextField } from '@mui/material';
import { DatePicker } from '@/shared/ui/DatePicker';
import type { CategoryType } from '@/app/lib/types/types.ts';
import MenuItem from '@mui/material/MenuItem';

const _CATEGORIES_: CategoryType[] = ['Development', 'Testing', 'Planning'];

export const CreateModalForm = function CreateModalForm() {
  return (
    <div className={s.form}>
      <TextField label={'Name !!!'} variant="outlined" size={'small'} />
      <TextField label="Task description" variant="outlined" size={'small'} />
      <TextField
        label="Category"
        select
        value={_CATEGORIES_}
        variant="outlined"
        size={'small'}
      >
        {_CATEGORIES_.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Hours"
        variant="outlined"
        type={'number'}
        size={'small'}
      />

      <DatePicker />
    </div>
  );
};
