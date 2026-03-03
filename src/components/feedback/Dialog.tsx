import React from 'react';
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import MuiDialogTitle, { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';
import MuiDialogContent, { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';
import MuiDialogContentText, { DialogContentTextProps as MuiDialogContentTextProps } from '@mui/material/DialogContentText';
import MuiDialogActions, { DialogActionsProps as MuiDialogActionsProps } from '@mui/material/DialogActions';

export type DialogProps = MuiDialogProps;
export type DialogTitleProps = MuiDialogTitleProps;
export type DialogContentProps = MuiDialogContentProps;
export type DialogContentTextProps = MuiDialogContentTextProps;
export type DialogActionsProps = MuiDialogActionsProps;

export function Dialog(props: DialogProps) {
  return <MuiDialog {...props} />;
}

export const DialogTitle = MuiDialogTitle;
export const DialogContent = MuiDialogContent;
export const DialogContentText = MuiDialogContentText;
export const DialogActions = MuiDialogActions;
export default Dialog;
