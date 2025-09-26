import * as React from 'react';

import { classNames, isString, styleMap } from '@chremata/utils';

import { Label } from '../../label/label';

import type { TableHeaderCellProps } from './table-header.types';
import { Icon } from '../../icon/icon';
import { useTableHeaderCell } from './use-table-header-cell';
import { Button } from '../../button/button';

export function TableHeaderCell(props: TableHeaderCellProps) {
  const {
    ariaSort,
    children,
    width,
    sortable,
    sortingIcon,
    sortingLabel,
    tabIndex,
    onClick,
    onKeyDown,
    onSort,
  } = useTableHeaderCell(props);

  function renderLabel() {
    return (
      <Label
        variant="emphasis"
        size="large">
        {children as string}
      </Label>
    );
  }

  function renderNode() {
    return children;
  }

  function renderSortIcon() {
    if (!sortable) {
      return null;
    }

    return (
      <Icon
        label={sortingLabel}
        onClick={onSort}
        pointer="pointer"
        primaryColor="var(--font-color--light)"
        name={sortingIcon}
      />
    );
  }

  const styles = styleMap({
    'inline-size': width,
  });

  const classes = classNames({
    'ch-table-cell': true,
    'ch-table-header-cell': true,
    'ch-table-header-cell--sortable': sortable,
  });

  return (
    <th
      role="columnheader"
      style={styles}
      className={classes}
      onClick={onClick}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      aria-sort={ariaSort}>
      <>
        {isString(children) ? renderLabel() : children}
        {renderSortIcon()}
      </>
    </th>
  );
}
