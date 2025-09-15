import * as React from 'react';

import { type TableCellProps } from '../table-cell/table-cell.types';

export type TableRowProps = {
  /**
   * Row content.
   */
  children:
    | React.ReactElement<TableCellProps>
    | React.ReactElement<TableCellProps>[];
  /**
   * Optional custom class name.
   */
  className?: string;
};
