import React, { forwardRef } from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export type BoxProps = MuiBoxProps;

/**
 * Box – layout primitive with sx prop (spacing, flex, grid, etc.).
 * Based on MUI Box.
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(props, ref) {
  return <MuiBox ref={ref} {...props} />;
});

export default Box;
