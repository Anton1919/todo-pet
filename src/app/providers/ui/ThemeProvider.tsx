import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage.ts';
import {
  Theme,
  ThemeContext,
  type ThemeType,
} from '@/shared/lib/context/ThemeContext.ts';
import { type ReactNode, useMemo, useState } from 'react';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || Theme.LIGHT;

type ThemeProviderProps = {
  initialTheme?: ThemeType;
  children: ReactNode;
};

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
