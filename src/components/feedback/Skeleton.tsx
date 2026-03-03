import React from 'react';
import MuiSkeleton, { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export type SkeletonProps = MuiSkeletonProps;

/**
 * Skeleton – loading placeholder.
 * Based on MUI Skeleton.
 */
export function Skeleton(props: SkeletonProps) {
  return <MuiSkeleton {...props} />;
}

export default Skeleton;
