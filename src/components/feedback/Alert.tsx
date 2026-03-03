import React, { forwardRef } from 'react';
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';

export type AlertProps = MuiAlertProps;

/**
 * Alert – inline message (success, error, warning, info).
 * Based on MUI Alert.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert ref={ref} {...props} />;
});

export default Alert;
