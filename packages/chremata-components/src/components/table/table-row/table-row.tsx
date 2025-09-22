import { classNames } from '@chremata/utils';

import { type TableRowProps } from './table-row.types';

export function TableRow(props: TableRowProps) {
  const { children, className, tabIndex } = props;

  const role = 'row';

  const classes = classNames({
    [className ?? '']: !!className,
  });

  return (
    <tr
      className={classes}
      role={role}
      tabIndex={tabIndex}>
      {children}
    </tr>
  );
}
