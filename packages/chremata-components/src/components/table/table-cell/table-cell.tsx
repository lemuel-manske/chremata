import { type TableCellProps } from './table-cell.types';

export function TableCell(props: TableCellProps) {
  const { children, colSpan, header = false } = props;

  const role = header ? 'columnheader' : 'gridcell';

  const Tag = header ? 'th' : 'td';

  return (
    <Tag
      role={role}
      colSpan={colSpan}>
      {children}
    </Tag>
  );
}
