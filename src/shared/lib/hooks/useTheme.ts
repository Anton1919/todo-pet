import { useContext, useEffect } from 'react';
import {
  Theme,
  ThemeContext,
  type ThemeType,
} from '@/shared/lib/context/ThemeContext.ts';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage.ts';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.classList.add(theme!);

    return () => {
      document.documentElement.classList.remove(theme!);
    };
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: ThemeType;
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
