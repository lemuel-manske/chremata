import { classNames } from '@chremata/utils';

import { Label } from '../../label/label';

import { type TableCellProps } from './table-cell.types';

import './index.css';

export function TableCell(props: TableCellProps) {
  const { children, header = false } = props;

  const classes = classNames({
    'ch-table-cell': true,
    'ch-table-columnheader': header,
  });

  const role = header ? 'columnheader' : 'gridcell';

  const Tag = header ? 'th' : 'td';

  const labelVariant = header ? 'emphasis' : 'regular';

  return (
    <Tag
      className={classes}
      role={role}>
      <Label variant={labelVariant}>{children}</Label>
    </Tag>
  );
}
