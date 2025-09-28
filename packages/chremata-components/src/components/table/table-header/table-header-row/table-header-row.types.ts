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

  sortable?: boolean;

  sortDirection?: TableSortDirection;

  onSort?: () => void;
  
  width?: number;
};

export type TableHeaderRowProps = {
  children:
    | React.ReactElement<TableHeaderCellProps>
    | React.ReactElement<TableHeaderCellProps>[];
};
