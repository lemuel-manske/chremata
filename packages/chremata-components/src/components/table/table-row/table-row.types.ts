import * as React from 'react';

import { type TabIndex } from '@chremata/utils';

import { type TableCellProps } from '../table-cell/table-cell.types';

export type TableRowFocus = TabIndex;

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

  /**
   * Defines row focus. Defaults to `-1`.
   */
  tabIndex?: TabIndex;
};
