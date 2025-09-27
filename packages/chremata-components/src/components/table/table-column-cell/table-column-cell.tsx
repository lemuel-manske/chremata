import type {
  DefaultTableColumnCellProps,
  TableColumnCellProps
} from './table-column-cell.types';

export function TableColumnCell(_props: TableColumnCellProps) {
  return null;
}

export const DEFAULT_TABLE_COLUMN_CELL_PROPS: DefaultTableColumnCellProps = {
  alignment: {
    horizontal: 'start',
    vertical: 'center',
  },

  children: null,
};
