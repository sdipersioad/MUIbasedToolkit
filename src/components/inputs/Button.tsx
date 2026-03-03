import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { forwardRef } from 'react';

export type ButtonProps = MuiButtonProps;

/**
 * Button – primary actions, navigation, and commands.
 * Based on MUI Button with toolkit defaults (no elevation, no uppercase).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  return <MuiButton ref={ref} {...props} />;
});

export default Button;
