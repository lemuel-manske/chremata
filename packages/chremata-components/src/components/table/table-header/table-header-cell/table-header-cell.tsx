import { classNames, Fit, isString, LayoutJustify, Size, styleMap } from '@chremata/utils';

import { Label } from '../../../label/label';

import { type TableHeaderCellProps } from './table-header-cell.types';
import { useTableHeaderCell } from './use-table-header-cell';
import { Button } from '../../../button/button';
import { ButtonVariantEnum } from '../../../button/button.types';
import { LabelVariantEnum } from '../../../label/label.types';
import type { IconSolidNames } from '../../../icon/icon.types';

export function TableHeaderCell(props: TableHeaderCellProps) {
  const {
    ariaSort,
    children,
    width,
    sortable,
    sortingIcon,
    onClick,
  } = useTableHeaderCell(props);

  function renderLabel() {
    return (
      <Label
        variant={LabelVariantEnum.EMPHASIS}
        size={Size.LARGE}>
        {children as string}
      </Label>
    );
  }

  function renderSortButton() {
    const renderIcon = () =>  {
      if (!sortingIcon) {
        return null;
      }

      return <Button.Icon name={sortingIcon} />
    };

    return (
      <Button 
        onClick={onClick} 
        variant={ButtonVariantEnum.SILENT_EMPHASIS} 
        fit={Fit.FILL_AVAILABLE} 
        size={Size.LARGE}
        justify={LayoutJustify.SPACE_BETWEEN}>
        <Button.Label>{children as string}</Button.Label>
        {renderIcon()}
      </Button>
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
      aria-sort={ariaSort}>
      <>
        {isString(children) ? sortable ? renderSortButton() : renderLabel() : children}
      </>
    </th>
  );
}
