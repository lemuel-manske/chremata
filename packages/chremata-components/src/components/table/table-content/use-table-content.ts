import { isFunction } from '@chremata/utils';

import type { TableColumnData } from '../table-column/table-column.types';
import type { TableContentProps } from './table-content.types';

export function useTableContent(props: TableContentProps) {
  const { columns, data } = props;

  function makeCell(column: TableColumnData, row: Record<string, unknown>) {
    const { cell, accessorKey, width } = column;

    const CELL_CONTENT = {
      width,
    };

    const content = cell.children;

    if (isFunction(content)) {
      const node = content({
        accessorKey,
        width,
        value: row[accessorKey],
      });

      return {
        ...CELL_CONTENT,
        node,
      };
    }

    const node = row[accessorKey];

    return {
      ...CELL_CONTENT,
      node: String(node),
    };
  }

  const rows = data.map(row => columns.map(column => makeCell(column, row)));

  return {
    rows,
  };
}
