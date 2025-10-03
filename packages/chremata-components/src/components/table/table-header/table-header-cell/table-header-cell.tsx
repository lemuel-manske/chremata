import { classNames, isString, styleMap } from '@chremata/utils';

import { Label } from '../../../label/label';
import { Icon } from '../../../icon/icon';

import { type TableHeaderCellProps } from './table-header-cell.types';
import { useTableHeaderCell } from './use-table-header-cell';

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

  function renderSortIcon() {
    if (!sortable) {
      return null;
    }

    return (
      <Icon
        label={sortingLabel}
        onClick={onSort}
        pointer="pointer"
        primaryColor="var(--color-contrast-light)"
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
      aria-roledescription="sortable"
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
