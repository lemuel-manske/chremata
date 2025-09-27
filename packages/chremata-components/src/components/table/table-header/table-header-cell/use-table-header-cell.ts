import * as React from 'react';

import type { TableHeaderCellProps } from '../table-header.types';

export function useTableHeaderCell(props: TableHeaderCellProps) {
  const { sortable, sortDirection, onSort, ...rest } = props;

  const handleSort = React.useCallback(() => {
    if (sortable && onSort) {
      onSort();
    }
  }, [sortable, onSort]);

  const sortingIcon: 'ChevronUpSvg' | 'ChevronDownSvg' =
    !sortDirection || sortDirection === 'desc'
      ? 'ChevronUpSvg'
      : 'ChevronDownSvg';

  const clearOrDesc =
    sortDirection === 'desc' ? 'Clear sort' : 'Sort descending';

  const sortingLabel = !sortDirection ? 'Sort ascending' : clearOrDesc;

  const handleClick = () => {
    if (sortable && onSort) {
      onSort();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();

      handleClick();
    }
  };

  const canSort = !!sortable;

  const tabIndex = sortable ? 0 : undefined;

  const onClick = sortable ? handleClick : undefined;
  const onKeyDown = sortable ? handleKeyDown : undefined;

  const ariaSort: 'none' | 'ascending' | 'descending' | undefined = !sortable
    ? undefined
    : !sortDirection
      ? 'none'
      : sortDirection === 'asc'
        ? 'ascending'
        : 'descending';

  return {
    ...rest,
    ariaSort,
    tabIndex,
    sortingIcon,
    sortingLabel,
    sortable: canSort,
    onClick,
    onKeyDown,
    onSort: handleSort,
  };
}
