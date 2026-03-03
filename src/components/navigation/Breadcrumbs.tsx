import React from 'react';
import MuiBreadcrumbs, { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';

export type BreadcrumbsProps = MuiBreadcrumbsProps;

/**
 * Breadcrumbs – hierarchical navigation trail.
 * Based on MUI Breadcrumbs.
 */
export function Breadcrumbs(props: BreadcrumbsProps) {
  return <MuiBreadcrumbs {...props} />;
}

export default Breadcrumbs;
