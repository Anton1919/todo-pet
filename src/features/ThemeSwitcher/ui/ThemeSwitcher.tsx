import { useTheme } from '@/shared/lib/hooks/useTheme.ts';
import { Button } from '@mui/material';

export const ThemeSwitcher = function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Button
        size={'small'}
        variant={'contained'}
        color={'primary'}
        onClick={toggleTheme}
      >
        Theme switcher
      </Button>
    </>
  );
};
