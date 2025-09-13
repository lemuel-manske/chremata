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
      'ch-table-row--even': isEven(i),
    });

    const cells = columns.map((col: Column) => (
      <TableCell key={col.key}>{row[col.key] as string}</TableCell>
    ));

    return (
      <TableRow
        key={i}
        className={classes}>
        {cells}
      </TableRow>
    );
  });

  const classes = classNames({
    'ch-table-rowgroup': true,
  });

  const role = 'rowgroup';

  return (
    <tbody
      className={classes}
      role={role}>
      {rows}
    </tbody>
  );
}
