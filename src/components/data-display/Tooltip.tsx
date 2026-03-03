import React, { forwardRef } from 'react';
import MuiTooltip, { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export type TooltipProps = MuiTooltipProps;

/**
 * Tooltip – short description on hover/focus.
 * Based on MUI Tooltip.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(props, ref) {
  return <MuiTooltip ref={ref} {...props} />;
});

export default Tooltip;
