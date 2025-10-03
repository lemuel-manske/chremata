import * as React from 'react';

import {
  doNothing,
  isEnterKey,
  isSpaceKey,
  type AriaSort,
  type Optional,
} from '@chremata/utils';

import { DEFAULT_TABLE_COLUMN_PROPS } from '../../table-column/table-column';

import type {
  DefaultTableHeaderCellProps,
  TableHeaderCellProps,
} from './table-header-cell.types';
import type { IconSolidNames } from '../../../icon/icon.types';

export const DEFAULT_TABLE_HEADER_CELL_PROPS: DefaultTableHeaderCellProps = {
  ...DEFAULT_TABLE_COLUMN_PROPS,
  sortDirection: 'none',
};

export function useTableHeaderCell(props: TableHeaderCellProps) {
  const {
    children,
    sortable = DEFAULT_TABLE_HEADER_CELL_PROPS.sortable,
    sortDirection = DEFAULT_TABLE_HEADER_CELL_PROPS.sortDirection,
    onSort,
    width = DEFAULT_TABLE_HEADER_CELL_PROPS.width,
  } = props;

  const resolveAriaSort = (): Optional<AriaSort> => {
    if (!sortable) {
      return undefined;
    }

    if (!sortDirection) {
      return 'none';
    }

    if (sortDirection === 'none') {
      return 'none';
    }

    return sortDirection === 'asc' ? 'ascending' : 'descending';
  };

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

  const getSortingIcon = (): IconSolidNames | null => {
    if (sortDirection === 'asc') {
      return 'ChevronUpSvg';
    }

    if (sortDirection === 'desc') {
      return 'ChevronDownSvg';
    }

    return null;
  };

  const sortingIcon = getSortingIcon();
  const onClick = sortable ? handleClick : doNothing;
  const onKeyDown = sortable ? handleKeyDown : doNothing;

  const ariaSort = resolveAriaSort();

  return {
    ariaSort,
    children,
    sortingIcon,
    sortable,
    onClick,
    onKeyDown,
    width,
  };
}
