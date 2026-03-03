import React from 'react';
import MuiGrid from '@mui/material/Grid2';
import type { Grid2Props as MuiGridProps } from '@mui/material/Grid2';

export type GridProps = MuiGridProps;

/**
 * Grid – responsive 12-column layout (MUI Grid2).
 * Based on MUI Grid2 (v6+).
 */
export function Grid(props: GridProps) {
  return <MuiGrid {...props} />;
}

export default Grid;
