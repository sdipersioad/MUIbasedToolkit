import React, { forwardRef } from 'react';
import MuiSelect, { SelectProps as MuiSelectProps } from '@mui/material/Select';
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import MuiFormControl, { FormControlProps as MuiFormControlProps } from '@mui/material/FormControl';
import MuiInputLabel, { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel';
import MuiFormHelperText, { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material/FormHelperText';

export type SelectProps = MuiSelectProps;
export type SelectMenuItemProps = MuiMenuItemProps;
export type SelectFormControlProps = MuiFormControlProps;
export type SelectInputLabelProps = MuiInputLabelProps;
export type SelectFormHelperTextProps = MuiFormHelperTextProps;

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(props, ref) {
  return <MuiSelect ref={ref} {...props} />;
});

export const SelectMenuItem = MuiMenuItem;
export const FormControl = MuiFormControl;
export const InputLabel = MuiInputLabel;
export const FormHelperText = MuiFormHelperText;

export default Select;
