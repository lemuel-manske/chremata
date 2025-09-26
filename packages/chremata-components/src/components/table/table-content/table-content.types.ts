import * as React from 'react';

import type { TableColumnData } from '../table-column/table-column.types';
import type { TableData } from '../table.types';

type TableContentCellAttributes = {
  children: React.ReactNode;

  colSpan?: number;

  width?: number;
};

export type TableContentCellProps = TableContentCellAttributes;

type TableContentRowAttributes = {
  children:
    | React.ReactElement<TableContentCellProps>
    | React.ReactElement<TableContentCellProps>[];
};

export type TableContentRowProps = TableContentRowAttributes;

type TableContentAttributes = {
  columns: TableColumnData[];

  data: TableData;
};

export type TableContentProps = TableContentAttributes;
