import { classNames } from '@chremata/utils';

import { type TableCellProps } from './table-cell.types';

import './index.css';

export function TableCell(props: TableCellProps) {
  const { children, header = false } = props;

  const classes = classNames({
    'ch-cell': true,
    'ch-columnheader': header,
  });

  const role = header ? 'columnheader' : 'gridcell';

  const Tag = header ? 'th' : 'td';

  return (
    <Tag className={classes} role={role}>
      {children}
    </Tag>
  );
}
