import React from 'react';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import MuiCardHeader, { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import MuiCardContent, { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';
import MuiCardActions, { CardActionsProps as MuiCardActionsProps } from '@mui/material/CardActions';

export type CardProps = MuiCardProps;
export type CardHeaderProps = MuiCardHeaderProps;
export type CardContentProps = MuiCardContentProps;
export type CardActionsProps = MuiCardActionsProps;

export function Card(props: CardProps) {
  return <MuiCard {...props} />;
}

export const CardHeader = MuiCardHeader;
export const CardContent = MuiCardContent;
export const CardActions = MuiCardActions;
export default Card;
