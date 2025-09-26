import type {
  DefaultTableColumnProps,
  TableColumnProps,
} from './table-column.types';

const defaultSortFn = (a: unknown, b: unknown): number => {
  if (a === b) return 0;
  if (a == null) return 1;
  if (b == null) return -1;

  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return String(a).localeCompare(String(b));
};

export function TableColumn(_props: TableColumnProps) {
  return null;
}

export const DEFAULT_TABLE_COLUMN_PROPS: DefaultTableColumnProps = {
  accessorKey: '',
  width: 120,
  sortable: false,
  sortFn: defaultSortFn,
};
