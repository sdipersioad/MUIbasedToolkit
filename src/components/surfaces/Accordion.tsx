import React from 'react';
import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails, { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material/AccordionDetails';

export type AccordionProps = MuiAccordionProps;
export type AccordionSummaryProps = MuiAccordionSummaryProps;
export type AccordionDetailsProps = MuiAccordionDetailsProps;

export function Accordion(props: AccordionProps) {
  return <MuiAccordion {...props} />;
}

export const AccordionSummary = MuiAccordionSummary;
export const AccordionDetails = MuiAccordionDetails;
export default Accordion;
