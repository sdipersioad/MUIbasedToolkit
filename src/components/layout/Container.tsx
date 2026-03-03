import React, { forwardRef } from 'react';
import MuiContainer, { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export type ContainerProps = MuiContainerProps;

/**
 * Container – max-width centered content with responsive padding.
 * Based on MUI Container.
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(props, ref) {
  return <MuiContainer ref={ref} {...props} />;
});

export default Container;
