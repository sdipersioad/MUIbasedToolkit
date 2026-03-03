import React from 'react';
import MuiLinearProgress, { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';
import MuiCircularProgress, { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

export type LinearProgressProps = MuiLinearProgressProps;
export type CircularProgressProps = MuiCircularProgressProps;

export function LinearProgress(props: LinearProgressProps) {
  return <MuiLinearProgress {...props} />;
}

export function CircularProgress(props: CircularProgressProps) {
  return <MuiCircularProgress {...props} />;
}

export default LinearProgress;
