import * as React from 'react';

import { findChild } from '@chremata/utils';

import { TableColumnHeader } from './table-column-header/table-column-header';
import { TableColumnCell } from './table-column-cell/table-column-cell';

import type {
  TableColumnData,
  TableSortDirection,
} from './table-column/table-column.types';
import { DEFAULT_TABLE_COLUMN_PROPS } from './table-column/table-column';

import type { DefaultTableProps, TableProps } from './table.types';

export const DEFAULT_TABLE_PROPS: DefaultTableProps = {
  data: [],
};

export function useTable(props: TableProps) {
  const {
    children,
    data = DEFAULT_TABLE_PROPS.data,
    label,
    labelledBy,
    id,
  } = props;

  const [sortBy, setSortBy] = React.useState<string | undefined>();
  const [sortDirection, setSortDirection] =
    React.useState<TableSortDirection>('asc');

  const childrenArray = [children].flat();

  const columns: TableColumnData[] = childrenArray.map(column => {
    const {
      accessorKey,
      children,
      width = DEFAULT_TABLE_COLUMN_PROPS.width,
      sortable = DEFAULT_TABLE_COLUMN_PROPS.sortable,
      sortFn = DEFAULT_TABLE_COLUMN_PROPS.sortFn,
    } = column.props;

    const header = findChild(children, TableColumnHeader);
    const cell = findChild(children, TableColumnCell);

    if (!header) {
      throw new Error(
        '[Table] No `TableColumnHeader` provided to `TableColum`.'
      );
    }

    if (!cell) {
      throw new Error(
        '[Table] No `TableColumnCell` provided to `TableColumn`.'
      );
    }

    return {
      accessorKey,
      width,
      sortable,
      sortFn,
      header: header.props,
      cell: cell.props,
    };
  });

  const memoizedColumns = React.useMemo(() => columns, [children]);

  const sortedData = React.useMemo(() => {
    if (!sortBy) {
      return data;
    }

    const column = memoizedColumns.find(col => col.accessorKey === sortBy);

    if (!column || !column.sortable) {
      return data;
    }

    const sortFn = column.sortFn;

    if (!sortFn) {
      throw new Error('[Table] no `sortFn` function defined.');
    }

    return [...data].sort((a, b) => {
      const result = sortFn(a[sortBy], b[sortBy]);

      return sortDirection === 'desc' ? -result : result;
    });
  }, [data, sortBy, sortDirection, memoizedColumns]);

  const handleSort = React.useCallback(
    (accessorKey: string) => {
      const column = memoizedColumns.find(
        col => col.accessorKey === accessorKey
      );

      if (!column || !column.sortable) {
        return;
      }

      if (sortBy === accessorKey) {
        if (sortDirection === 'asc') {
          setSortDirection('desc');
        } else {
          setSortBy(undefined);
          setSortDirection('asc');
        }
      } else {
        setSortBy(accessorKey);
        setSortDirection('asc');
      }
    },
    [sortBy, sortDirection, memoizedColumns]
  );

  if (!label && !labelledBy) {
    throw new Error(
      '[Table] You must provide either a `label` or `labelledBy` prop for accessibility.'
    );
  }

  if (label && labelledBy) {
    throw new Error(
      '[Table] You must provide either a `label` or `labelledBy` prop, not both.'
    );
  }

  return {
    columns: memoizedColumns,
    data: sortedData,
    label,
    labelledBy,
    id,
    sortBy,
    sortDirection,
    onSort: handleSort,
  };
}
