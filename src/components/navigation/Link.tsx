import React, { forwardRef } from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export type LinkProps = MuiLinkProps;

/**
 * Link – text or inline link with optional underline.
 * Based on MUI Link.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  return <MuiLink ref={ref} {...props} />;
});

export default Link;
