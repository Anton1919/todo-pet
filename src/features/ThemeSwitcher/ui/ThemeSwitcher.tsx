import { useTheme } from '@/shared/lib/hooks/useTheme.ts';
import { memo } from 'react';

export const ThemeSwitcher = memo(function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>ThemeSwitcher</button>;
});
