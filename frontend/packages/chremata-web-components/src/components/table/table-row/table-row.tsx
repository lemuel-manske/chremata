import { classNames } from '@chremata/utils';

import { type TableRowProps } from './table-row.types';

import './index.css';

export function TableRow(props: TableRowProps) {
  const { children, className } = props;

  const classes = classNames({
    'ch-row': true,
    [className!]: true,
  });

  const role = 'row';

  return (
    <tr className={classes} role={role}>
      {children}
    </tr>
  );
}
