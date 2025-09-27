import type { TableHeaderRowProps } from './table-header.types';

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
