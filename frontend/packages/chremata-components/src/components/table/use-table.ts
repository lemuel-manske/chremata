import { type TableProps } from './table.types';

export function useTable(props: TableProps) {
  const { columns, data, caption } = props;

  const columnsCount = columns.length;

  return {
    columnsCount,
    columns,
    data,
    caption,
  };
}
