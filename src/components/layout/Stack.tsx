import React, { forwardRef } from 'react';
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack';

export type StackProps = MuiStackProps;

/**
 * Stack – flexbox row/column with consistent spacing.
 * Based on MUI Stack.
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
});

export default Stack;
