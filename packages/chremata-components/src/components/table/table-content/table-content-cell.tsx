import { isString, styleMap } from '@chremata/utils';

import { Label } from '../../label/label';

import { type TableContentCellProps } from './table-content.types';

export function TableContentCell(props: TableContentCellProps) {
  const { children, colSpan, width } = props;

  function renderLabel() {
    return (
      <Label
        variant="regular"
        size="medium">
        {children as string}
      </Label>
    );
  }

  const styles = styleMap({
    'inline-size': width,
  });

  return (
    <td
      role="gridcell"
      className="ch-table-content-cell"
      colSpan={colSpan}
      style={styles}>
      {isString(children) ? renderLabel() : children}
    </td>
  );
}
