import { type TableRowProps } from './table-row.types';
import { classNames } from '@chremata/utils';

export function TableRow(props: TableRowProps) {
  const { children, className } = props;

  const role = 'row';

  const classes = classNames({
    [className ?? '']: !!className,
  });

  return (
    <tr role={role} className={classes}>
      {children}
    </tr>
  );
}
