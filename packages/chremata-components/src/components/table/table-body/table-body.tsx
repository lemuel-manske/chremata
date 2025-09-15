import { Label } from '../../label/label';
import { TableCell } from '../table-cell/table-cell';
import { TableRow } from '../table-row/table-row';

import { type Column, type Row } from '../table.types';

import { type TableBodyProps } from './table-body.types';

export function TableBody(props: TableBodyProps) {
  const { columns, data } = props;

  const isEmpty = data.length === 0;

  const rows = data.map((row: Row, i: number) => {
    const cells = columns.map((col: Column) => (
      <TableCell key={col.key}>
        <Label>{row[col.key] as string}</Label>
      </TableCell>
    ));

    return <TableRow key={i}>{cells}</TableRow>;
  });

  const role = 'rowgroup';

  if (isEmpty) {
    const emptyLabel = (
      <Label
        variant="emphasis"
        size="large">
        No data
      </Label>
    );

    return (
      <tbody>
        <TableRow className="empty-row">
          <TableCell
            colSpan={columns.length}
            key={1}>
            {emptyLabel}
          </TableCell>
        </TableRow>
      </tbody>
    );
  }

  return <tbody role={role}>{rows}</tbody>;
}
