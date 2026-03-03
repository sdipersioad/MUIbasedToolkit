import React from 'react';
import MuiDivider, { DividerProps as MuiDividerProps } from '@mui/material/Divider';

export type DividerProps = MuiDividerProps;

/**
 * Divider – visual separator (horizontal or vertical).
 * Based on MUI Divider.
 */
export function Divider(props: DividerProps) {
  return <MuiDivider {...props} />;
}

export default Divider;
