/**
 * @autodesk/ui-toolkit
 *
 * UI component library based on MUI (Material UI) for Autodesk products.
 * Wrap your app in ThemeProvider with createToolkitTheme() for consistent styling.
 */

export { createToolkitTheme, toolkitThemeOptions } from './theme';
export { ThemeProvider } from '@mui/material/styles';
export type { ThemeOptions, Theme } from '@mui/material/styles';

export * from './components/inputs';
export * from './components/data-display';
export * from './components/feedback';
export * from './components/surfaces';
export * from './components/navigation';
export * from './components/layout';
