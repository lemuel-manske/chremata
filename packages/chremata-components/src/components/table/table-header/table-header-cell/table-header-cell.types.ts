import * as React from 'react';

import type {
  TableSortDirection,
} from '../../table-column/table-column.types';

type TableHeaderCellAttributes = {
  children: React.ReactNode;

  onSort?: () => void;

  sortable?: boolean;

  sortDirection?: TableSortDirection;
  
  width?: number;
};

export type TableHeaderCellProps = TableHeaderCellAttributes;

export type DefaultTableHeaderCellProps = Required<Pick<TableHeaderCellProps, 'sortable' | 'sortDirection' | 'width'>>;
