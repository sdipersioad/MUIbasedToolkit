import React, { forwardRef } from 'react';
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import MuiRadioGroup, { type RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';

export type RadioProps = MuiRadioProps;
export type RadioGroupProps = MuiRadioGroupProps;
export type RadioFormControlLabelProps = FormControlLabelProps;

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(function Radio(props, ref) {
  return <MuiRadio ref={ref} {...props} />;
});

export const RadioGroup = MuiRadioGroup;
export const RadioFormControlLabel = MuiFormControlLabel;
export default Radio;
