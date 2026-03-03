import React, { forwardRef } from 'react';
import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

export type AvatarProps = MuiAvatarProps;

/**
 * Avatar – user or entity image/initials.
 * Based on MUI Avatar.
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  return <MuiAvatar ref={ref} {...props} />;
});

export default Avatar;
