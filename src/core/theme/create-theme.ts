import { PaletteOptions, ThemeOptions, createTheme as createMuiTheme } from '@mui/material';
import { EThemeMode } from './ThemeModeSettingContext/types';

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#78909c', // stone grey
    light: '#a7c0cd',
    dark: '#4b636e',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#ffd54f', // yellow
    light: '#ffff81',
    dark: '#c8a415',
    contrastText: '#000000',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#263238',
    secondary: '#455a64',
  },
};

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#78909c', // stone grey
    light: '#a7c0cd',
    dark: '#4b636e',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#ffd54f', // yellow
    light: '#ffff81',
    dark: '#c8a415',
    contrastText: '#000000',
  },
  background: {
    default: '#263238',
    paper: '#37474f',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b0bec5',
  },
};

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
};

export const createTheme = (mode: EThemeMode): ReturnType<typeof createMuiTheme> => {
  return createMuiTheme({
    ...themeOptions,
    palette: mode === EThemeMode.Light ? lightPalette : darkPalette,
    colorSchemes: {
      light: true,
      dark: true,
    },
  });
};
