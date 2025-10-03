import * as React from 'react';

import type {
  Comparable,
  EnumOrStringLiteralTypes,
  NoChildren,
  SortDirection,
} from '@chremata/utils';

import type { TableColumnCellProps } from '../table-column-cell/table-column-cell.types';
import type { TableColumnHeaderProps } from '../table-column-header/table-column-header.types';

export type TableSortDirection = EnumOrStringLiteralTypes<SortDirection>;

export type TableColumnProps = {
  children: [
    React.ReactElement<TableColumnHeaderProps>,
    React.ReactElement<TableColumnCellProps>,
  ];

  accessorKey: string;

  width?: number;

  sortable?: boolean;

  sortFn?: Comparable;
};

export type TableColumnData = NoChildren<TableColumnProps> & {
  header: TableColumnHeaderProps;
  cell: TableColumnCellProps;
};

export type TableColumnCellInfo = NoChildren<TableColumnProps> & {
  value: unknown;
};

export type TableColumnHeaderCellInfo = NoChildren<TableColumnProps>;

export type DefaultTableColumnProps = Required<
  Pick<TableColumnProps, 'width' | 'sortable' | 'accessorKey' | 'sortFn'>
>;
