import { useTheme } from '@/shared/lib/hooks/useTheme.ts';
import { memo } from 'react';
import { Button } from '@mui/material';

export const ThemeSwitcher = memo(function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button
        size={'small'}
        variant={'contained'}
        color={'primary'}
        onClick={toggleTheme}
      >
        ThemeSwitcher
      </Button>
    </>
  );
});
