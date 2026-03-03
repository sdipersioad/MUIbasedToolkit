import React, { forwardRef } from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export type TypographyProps = MuiTypographyProps;

/**
 * Typography – text with semantic variants (h1–h6, body1, body2, caption, etc.).
 * Based on MUI Typography.
 */
export const Typography = forwardRef<HTMLSpanElement, TypographyProps>(function Typography(props, ref) {
  return <MuiTypography ref={ref} {...props} />;
});

export default Typography;
