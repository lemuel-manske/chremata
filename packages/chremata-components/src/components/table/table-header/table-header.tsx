import { type TableHeaderProps } from './table-header.types';

import { TableRow } from '../table-row/table-row';
import { TableCell } from '../table-cell/table-cell';

import { type Column } from '../table.types';

import { Label } from '../../label/label';

export function TableHeader(props: TableHeaderProps) {
  const { columns } = props;

  const role = 'rowgroup';

  const cells = columns.map((col: Column) => (
    <TableCell
      header
      key={col.key}>
      <Label variant="emphasis">{col.label}</Label>
    </TableCell>
  ));

  return (
    <thead role={role}>
      <TableRow>{cells}</TableRow>
    </thead>
  );
}
