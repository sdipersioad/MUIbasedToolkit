import React, { forwardRef } from 'react';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

export type ChipProps = MuiChipProps;

/**
 * Chip – compact label, filter, or choice.
 * Based on MUI Chip.
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(props, ref) {
  return <MuiChip ref={ref} {...props} />;
});

export default Chip;
