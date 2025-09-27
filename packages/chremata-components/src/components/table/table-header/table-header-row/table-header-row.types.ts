import * as React from 'react';

import type { TableColumnData, TableSortDirection } from '../../table-column/table-column.types';

export type TableHeaderProps = {
  columns: TableColumnData[];

  onSort?: (accessorKey: string) => void;

  sortBy?: string;

  sortDirection?: TableSortDirection;
};

export type TableHeaderCellProps = {
  children: React.ReactNode;

  width?: number;

  sortable?: boolean;

  sortDirection?: TableSortDirection;

  onSort?: () => void;
};

export type TableHeaderRowProps = {
  children:
    | React.ReactElement<TableHeaderCellProps>
    | React.ReactElement<TableHeaderCellProps>[];
};
