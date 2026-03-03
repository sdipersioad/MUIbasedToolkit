import React from 'react';
import MuiList, { ListProps as MuiListProps } from '@mui/material/List';
import MuiListItem, { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import MuiListItemButton, { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';
import MuiListItemText, { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText';
import MuiListItemIcon, { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon';

export type ListProps = MuiListProps;
export type ListItemProps = MuiListItemProps;
export type ListItemButtonProps = MuiListItemButtonProps;
export type ListItemTextProps = MuiListItemTextProps;
export type ListItemIconProps = MuiListItemIconProps;

export function List(props: ListProps) {
  return <MuiList {...props} />;
}

export const ListItem = MuiListItem;
export const ListItemButton = MuiListItemButton;
export const ListItemText = MuiListItemText;
export const ListItemIcon = MuiListItemIcon;
export default List;
