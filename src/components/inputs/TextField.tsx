import React, { forwardRef } from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = MuiTextFieldProps;

/**
 * TextField – single-line or multiline text input.
 * Based on MUI TextField; defaults to outlined variant.
 */
export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(props, ref) {
  return <MuiTextField ref={ref} {...props} />;
});

export default TextField;
