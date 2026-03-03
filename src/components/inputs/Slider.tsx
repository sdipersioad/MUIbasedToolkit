import React, { forwardRef } from 'react';
import MuiSlider, { SliderProps as MuiSliderProps } from '@mui/material/Slider';

export type SliderProps = MuiSliderProps;

/**
 * Slider – continuous value selection within a range.
 * Based on MUI Slider.
 */
export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider(props, ref) {
  return <MuiSlider ref={ref} {...props} />;
});

export default Slider;
