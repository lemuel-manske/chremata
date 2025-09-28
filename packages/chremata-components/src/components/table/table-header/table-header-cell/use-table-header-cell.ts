import * as React from 'react';

import { doNothing, isEnterKey, isSpaceKey, type AriaSort, type Optional } from '@chremata/utils';

import { DEFAULT_TABLE_COLUMN_PROPS } from '../../table-column/table-column';

import type { DefaultTableHeaderCellProps, TableHeaderCellProps } from './table-header-cell.types';
import type { IconSolidNames } from '../../../icon/icon.types';

export const DEFAULT_TABLE_HEADER_CELL_PROPS: DefaultTableHeaderCellProps = {
  ...DEFAULT_TABLE_COLUMN_PROPS,
  sortDirection: 'none'
};

export function useTableHeaderCell(props: TableHeaderCellProps) {
  const {
    children,
    sortable = DEFAULT_TABLE_HEADER_CELL_PROPS.sortable,
    sortDirection = DEFAULT_TABLE_HEADER_CELL_PROPS.sortDirection,
    onSort,
    width =  DEFAULT_TABLE_HEADER_CELL_PROPS.width,
  } = props;

  function resolveAriaSort(): Optional<AriaSort> {
    if (!sortable) {
      return undefined;
    }

    if (!sortDirection) {
      return 'none';
    }

    return sortDirection === 'asc'
      ? 'ascending'
      : 'descending';
  }
  
  const handleSort = React.useCallback(() => {
    if (sortable && onSort) {
      onSort();
    }
  }, [sortable, onSort]);

  const handleClick = () => {
    if (sortable && onSort) {
      onSort();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    if (isEnterKey(e.key) || isSpaceKey(e.key)) {
      e.preventDefault();

      handleClick();
    }
  };

  const sortingIcon: IconSolidNames = !sortDirection || sortDirection === 'desc'
    ? 'ChevronUpSvg'
    : 'ChevronDownSvg';

  const sortingLabel = 'Toggle sort';

  const tabIndex = sortable ? 0 : -1;

  const onClick = sortable ? handleClick : doNothing;
  const onKeyDown = sortable ? handleKeyDown : doNothing;

  const ariaSort = resolveAriaSort();

  return {
    ariaSort,
    children,
    tabIndex,
    sortingIcon,
    sortingLabel,
    sortable,
    onClick,
    onKeyDown,
    onSort: handleSort,
    width,
  };
}
