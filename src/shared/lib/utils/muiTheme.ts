import { createTheme, type ThemeOptions } from '@mui/material/styles';

// Вспомогательная функция для безопасного чтения значения из CSS custom property
const getCSSVar = (variableName: string, fallbackValue: string): string => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return fallbackValue; // Для SSR или тестовых окружений без DOM
  }
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
  return value || fallbackValue;
};

export const generateMuiThemeOptions = (
  mode: 'light' | 'dark',
): ThemeOptions => {
  // Фолбэки на случай, если CSS переменные не загрузились (хотя не должны при правильной настройке)
  const defaultLightColors = {
    text: '#222',
    bg: '#f7f8fa',
    surface: '#fff',
    primary: '#1976d2',
    secondary: '#e0e0e0',
  };

  const defaultDarkColors = {
    text: '#eaf4ff',
    bg: '#181c23',
    surface: '#232834',
    primary: '#1976d2',
    secondary: '#313846',
  };

  const defaults = mode === 'dark' ? defaultDarkColors : defaultLightColors;

  return {
    palette: {
      mode: mode, // 'light' или 'dark'
      text: {
        primary: getCSSVar('--color-text', defaults.text),
        // secondary: getCSSVar('--color-text-secondary', '#777'), // Добавь если есть
        // disabled: getCSSVar('--color-text-disabled', '#aaa'), // Добавь если есть
      },
      background: {
        default: getCSSVar('--color-bg', defaults.bg),
        paper: getCSSVar('--color-surface', defaults.surface),
      },
      primary: {
        main: getCSSVar('--color-primary', defaults.primary),
        // light: getCSSVar('--color-primary-light', '#42a5f5'), // Можно генерировать или читать из CSS
        // dark: getCSSVar('--color-primary-dark', '#1565c0'),
        // contrastText: getCSSVar('--color-primary-contrast', '#fff'),
      },
      secondary: {
        main: getCSSVar('--color-secondary', defaults.secondary),
        // contrastText: getCSSVar('--color-secondary-contrast', '#000'),
      },
      // Ты можешь добавить error, warning, info, success аналогично,
      // читая их из CSS-переменных или задавая статично/генерируя
      // divider: getCSSVar('--color-border', '#e0e0e0'),
    },
    // Здесь можно переопределить типографику, компоненты и т.д.
    // typography: {
    //   fontFamily: getCSSVar('--font-family-base', 'Roboto, sans-serif'),
    // },
  };
};

// Функция для создания полной темы MUI
export const getMuiTheme = (mode: 'light' | 'dark') => {
  return createTheme(generateMuiThemeOptions(mode));
};
