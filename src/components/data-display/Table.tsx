import React from 'react';
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import MuiTableBody, { TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';
import MuiTableCell, { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';
import MuiTableContainer, { TableContainerProps as MuiTableContainerProps } from '@mui/material/TableContainer';
import MuiTableHead, { TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';
import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';

export type TableProps = MuiTableProps;
export type TableBodyProps = MuiTableBodyProps;
export type TableCellProps = MuiTableCellProps;
export type TableContainerProps = MuiTableContainerProps;
export type TableHeadProps = MuiTableHeadProps;
export type TableRowProps = MuiTableRowProps;

export function Table(props: TableProps) {
  return <MuiTable {...props} />;
}

export const TableBody = MuiTableBody;
export const TableCell = MuiTableCell;
export const TableContainer = MuiTableContainer;
export const TableHead = MuiTableHead;
export const TableRow = MuiTableRow;
export default Table;
