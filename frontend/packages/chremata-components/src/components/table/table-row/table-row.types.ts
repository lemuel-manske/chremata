import * as React from 'react';

import { type TableCellProps } from '../table-cell/table-cell.types';

export type TableRowProps = {
  className?: string;
  children:
    | [React.ReactElement<TableCellProps>]
    | React.ReactElement<TableCellProps>[];
};
