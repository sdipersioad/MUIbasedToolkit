import { createTheme, type ThemeOptions } from '@mui/material/styles';

/**
 * Autodesk UI Toolkit theme.
 * Extends MUI default theme; customize palette, typography, and components here.
 */
export const toolkitThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#0696d7',
      light: '#5eb8e6',
      dark: '#00629b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#424242',
      light: '#6d6d6d',
      dark: '#1b1b1b',
      contrastText: '#ffffff',
    },
    success: { main: '#22c55e' },
    error: { main: '#dc2626' },
    warning: { main: '#f59e0b' },
    info: { main: '#0696d7' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
    },
  },
};

export const createToolkitTheme = (overrides?: ThemeOptions) =>
  createTheme({
    ...toolkitThemeOptions,
    ...overrides,
  });

export default createToolkitTheme();
