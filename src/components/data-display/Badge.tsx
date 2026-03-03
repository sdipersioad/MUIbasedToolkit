import React, { forwardRef } from 'react';
import MuiBadge, { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

export type BadgeProps = MuiBadgeProps;

/**
 * Badge – count or status overlay (e.g. notifications).
 * Based on MUI Badge.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  return <MuiBadge ref={ref} {...props} />;
});

export default Badge;
