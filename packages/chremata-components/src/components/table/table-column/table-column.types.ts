import * as React from 'react';

import type {
  Alignment,
  Comparable,
  EnumOrStringLiteralTypes,
  SortDirection,
} from '@chremata/utils';

import type { TableCellProps } from '../table-cell/table-cell.types';
import type { TableColumnHeaderProps } from '../table-column-header/table-column-header.types';

export type TableSortDirection = EnumOrStringLiteralTypes<SortDirection>;

export type TableColumnProps = {
  children: [
    React.ReactElement<TableColumnHeaderProps>,
    React.ReactElement<TableCellProps>,
  ];

  accessorKey: string;

  width?: number;

  sortable?: boolean;

  sortFn?: Comparable;
};

export type TableColumnCellInfo = Omit<TableColumnProps, 'children'> & {
  value: unknown;
};

export type TableColumnData = Pick<
  TableColumnProps,
  'accessorKey' | 'width' | 'sortable' | 'sortFn'
> & {
  header: TableColumnHeaderProps;
  cell: TableCellProps;
};

export type TableColumnHeaderCellInfo = Omit<TableColumnProps, 'children'> & {
  sortDirection?: TableSortDirection;

  onSort?: (accessorKey: string) => void;
};

export type TableCellAlignmentOptions = {
  horizontal?: EnumOrStringLiteralTypes<Alignment>;
  vertical?: EnumOrStringLiteralTypes<Alignment>;
};

export type DefaultTableColumnProps = Required<
  Pick<TableColumnProps, 'width' | 'sortable'>
> &
  Pick<TableColumnProps, 'accessorKey' | 'sortFn'>;
