import { doNothing, isFunction } from '@chremata/utils';

import type { TableColumnData } from '../table-column/table-column.types';
import type { TableHeaderProps } from './table-header.types';

export function useTableHeader(props: TableHeaderProps) {
  const { columns, onSort, sortBy, sortDirection } = props;

  function getNode(column: TableColumnData) {
    const { header, accessorKey, width, sortable } = column;

    const content = header.children;

    const _sortDirection = sortBy === accessorKey ? sortDirection : undefined;
    const _onSort = sortable && onSort ? () => onSort(accessorKey) : doNothing;

    const headerCellInfo = {
      accessorKey,
      width,
      sortable,
      sortDirection: _sortDirection,
      onSort: _onSort,
    };

    if (isFunction(content)) {
      const node = content(headerCellInfo);

      return {
        ...headerCellInfo,
        node,
      };
    }

    const node = content;

    return {
      ...headerCellInfo,
      node,
    };
  }

  const cells = columns.map(c => getNode(c));

  return {
    cells,
  };
}
