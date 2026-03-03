import React, { forwardRef } from 'react';
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

export type MenuProps = MuiMenuProps;
export type MenuItemProps = MuiMenuItemProps;

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  return <MuiMenu ref={ref} {...props} />;
});

export const MenuItem = MuiMenuItem;
export default Menu;
