import * as React from 'react';

import type { ElementId } from '@chremata/utils';

import type { TableColumnProps } from './table-column/table-column.types';

type TableDataItem = Record<string, unknown>;

export type TableData = TableDataItem[];

type TableLabelAttributes =
  | {
      label: string;
      labelledBy?: never;
    }
  | {
      label?: never;
      labelledBy: ElementId;
    };

type TableAttributes = {
  children:
    | React.ReactElement<TableColumnProps>
    | React.ReactElement<TableColumnProps>[];

  data: TableData;
};

export type TableProps = TableLabelAttributes & TableAttributes;

export type DefaultTableProps = Required<Pick<TableProps, 'data'>>;
