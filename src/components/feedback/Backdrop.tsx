import React, { forwardRef } from 'react';
import MuiBackdrop, { BackdropProps as MuiBackdropProps } from '@mui/material/Backdrop';

export type BackdropProps = MuiBackdropProps;

/**
 * Backdrop – dimmed overlay behind modals or loading.
 * Based on MUI Backdrop.
 */
export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(props, ref) {
  return <MuiBackdrop ref={ref} {...props} />;
});

export default Backdrop;
