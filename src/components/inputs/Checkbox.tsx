import React, { forwardRef } from 'react';
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

export type CheckboxProps = MuiCheckboxProps;

/**
 * Checkbox – binary choice or list selection.
 * Based on MUI Checkbox.
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(props, ref) {
  return <MuiCheckbox ref={ref} {...props} />;
});

export default Checkbox;
