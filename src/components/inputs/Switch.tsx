import React, { forwardRef } from 'react';
import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';

export type SwitchProps = MuiSwitchProps;
export type SwitchFormControlLabelProps = FormControlLabelProps;

/**
 * Switch – on/off toggle.
 * Based on MUI Switch.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(props, ref) {
  return <MuiSwitch ref={ref} {...props} />;
});

export const SwitchFormControlLabel = MuiFormControlLabel;
export default Switch;
