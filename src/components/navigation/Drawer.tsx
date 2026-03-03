import React, { forwardRef } from 'react';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

export type DrawerProps = MuiDrawerProps;

/**
 * Drawer – sliding panel (side navigation or details).
 * Based on MUI Drawer.
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(props, ref) {
  return <MuiDrawer ref={ref} {...props} />;
});

export default Drawer;
