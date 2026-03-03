import React, { forwardRef } from 'react';
import MuiSnackbar, { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';

export type SnackbarProps = MuiSnackbarProps;

/**
 * Snackbar – temporary toast message (e.g. "Saved").
 * Based on MUI Snackbar.
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(props, ref) {
  return <MuiSnackbar ref={ref} {...props} />;
});

export default Snackbar;
