import * as React from 'react';

import { type LabelProps } from '../../label/label.types';

export type TableCellProps = {
  /**
   * Cell content.
   */
  children: React.ReactElement<LabelProps>;

  /**
   * Whether the cell is a header cell.
   */
  header?: boolean;

  /**
   * Number of columns the cell should span.
   */
  colSpan?: number;
};
