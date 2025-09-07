import { classNames } from '@chremata/utils';

import { TableRow } from '../table-row/table-row';
import { TableCell } from '../table-cell/table-cell';

import { type Column } from '../table.types';

import { type TableHeaderProps } from './table-header.types';

import './index.css';

export function TableHeader(props: TableHeaderProps) {
  const { columns } = props;

  const classes = classNames({
    'ch-rowgroup': true,
  });

  const role = 'rowgroup';

  const cells = columns.map((col: Column) => (
    <TableCell header key={col.key}>
      {col.label}
    </TableCell>
  ));

  return (
    <thead className={classes} role={role}>
      <TableRow>{cells}</TableRow>
    </thead>
  );
}
