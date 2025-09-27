import type { TableHeaderRowProps } from './table-header-row.types';

export function TableHeaderRow(props: TableHeaderRowProps) {
  const { children } = props;

  return (
    <tr
      className="ch-table-header-row"
      role="row">
      {children}
    </tr>
  );
}
