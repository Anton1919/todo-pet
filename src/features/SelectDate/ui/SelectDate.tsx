import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import s from './SelectDate.module.scss';

type PropsType<T extends string> = {
  itemList: T[];
  selectedValue: T;
  onChange: (value: T) => void;
  label?: string;
};

export const SelectDate = function SelectDate<T extends string>({
  itemList,
  selectedValue,
  onChange,
  label,
}: PropsType<T>) {
  const handleChange = (e: SelectChangeEvent<T>) => {
    onChange(e.target.value as T);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel className={s.inputLabel} id={`select${label}`}>
        {label}
      </InputLabel>
      <Select
        className={s.select}
        labelId={`select${label}`}
        id={label}
        label={label}
        value={itemList.length ? selectedValue : ''}
        onChange={handleChange}
      >
        {itemList.map((value) => (
          <MenuItem
            style={{ color: 'var(--color-text)' }}
            sx={{
              '&.Mui-selected': (theme) => ({
                color: theme.palette.text.primary,
              }),
            }}
            key={value}
            value={value}
          >
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
