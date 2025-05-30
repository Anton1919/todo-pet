import React, { useMemo, useState, useEffect, type ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  type Theme as MuiTheme,
} from '@mui/material/styles';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import {
  Theme,
  ThemeContext,
  type ThemeType,
} from '@/shared/lib/context/ThemeContext.ts';
import { getMuiTheme } from '@/shared/lib/utils/muiTheme.ts';

type AppThemeProviderProps = {
  initialTheme?: ThemeType;
  children: ReactNode;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || Theme.LIGHT;

const AppThemeProvider = ({
  initialTheme,
  children,
}: AppThemeProviderProps) => {
  const [customTheme, setCustomTheme] = useState<ThemeType>(
    initialTheme || defaultTheme,
  );
  const [muiTheme, setMuiTheme] = useState<MuiTheme>(getMuiTheme(customTheme));

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(customTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, customTheme);

    setMuiTheme(getMuiTheme(customTheme));

    return () => {
      root.classList.remove(customTheme);
    };
  }, [customTheme]);

  const themeContextValue = useMemo(
    () => ({
      theme: customTheme,
      setTheme: setCustomTheme,
    }),
    [customTheme],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
