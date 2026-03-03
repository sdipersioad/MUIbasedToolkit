import React from 'react';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab';

export type TabsProps = MuiTabsProps;
export type TabProps = MuiTabProps;

export function Tabs(props: TabsProps) {
  return <MuiTabs {...props} />;
}

export const Tab = MuiTab;
export default Tabs;
