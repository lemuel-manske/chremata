import type { DefaultTableCellProps, TableCellProps } from './table-cell.types';

export function TableCell(_props: TableCellProps) {
  return null;
}

export const DEFAULT_TABLE_CELL_PROPS: DefaultTableCellProps = {
  alignment: {
    horizontal: 'start',
    vertical: 'center',
  },
  children: null,
};
