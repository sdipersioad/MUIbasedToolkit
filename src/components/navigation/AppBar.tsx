import React, { forwardRef } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiToolbar, { ToolbarProps as MuiToolbarProps } from '@mui/material/Toolbar';

export type AppBarProps = MuiAppBarProps;
export type ToolbarProps = MuiToolbarProps;

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(function AppBar(props, ref) {
  return <MuiAppBar ref={ref} {...props} />;
});

export const Toolbar = MuiToolbar;
export default AppBar;
