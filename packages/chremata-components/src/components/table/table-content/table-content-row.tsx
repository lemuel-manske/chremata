import { type TableContentRowProps } from './table-content.types';

export function TableContentRow(props: TableContentRowProps) {
  const { children } = props;

  return (
    <tr
      className="ch-table-content-row"
      role="row"
      tabIndex={0}>
      {children}
    </tr>
  );
}
