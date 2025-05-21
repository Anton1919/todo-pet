import { createContext } from 'react';

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export type ThemeContextProps = {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});
