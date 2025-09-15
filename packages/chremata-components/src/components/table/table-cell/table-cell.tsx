import { Label } from '../../label/label';
import { classNames } from '@chremata/utils';

import { type TableCellProps } from './table-cell.types';

export function TableCell(props: TableCellProps) {
  const { children, colSpan, className, header = false } = props;

  const role = header ? 'columnheader' : 'gridcell';

  const Tag = header ? 'th' : 'td';

  const classes = classNames({
    [className ?? '']: !!className,
  });

  return (
    <Tag
      role={role}
      colSpan={colSpan}
      className={classes}>
      {children}
    </Tag>
  );
}
