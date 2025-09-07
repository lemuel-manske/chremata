import { isEven, classNames } from '@chremata/utils';

import { TableCell } from '../table-cell/table-cell';
import { TableRow } from '../table-row/table-row';

import { type Column, type Row } from '../table.types';

import { type TableBodyProps } from './table-body.types';

import './index.css';

export function TableBody(props: TableBodyProps) {
  const { columns, data } = props;

  const rows = data.map((row: Row, i: number) => {
    const classes = classNames({
      'ch-row-even': isEven(i),
    });

    const newLocal = columns.map((col: Column) => (
      <TableCell key={col.key}>{row[col.key] as React.ReactNode}</TableCell>
    ));

    return (
      <TableRow key={i} className={classes}>
        {newLocal}
      </TableRow>
    );
  });

  const classes = classNames({
    'ch-rowgroup': true,
  });

  const role = 'rowgroup';

  return (
    <tbody className={classes} role={role}>
      {rows}
    </tbody>
  );
}
