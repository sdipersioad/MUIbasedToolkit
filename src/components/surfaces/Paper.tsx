import React, { forwardRef } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export type PaperProps = MuiPaperProps;

/**
 * Paper – elevated surface/container.
 * Based on MUI Paper.
 */
export const Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper(props, ref) {
  return <MuiPaper ref={ref} {...props} />;
});

export default Paper;
