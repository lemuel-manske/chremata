import type {
  DefaultTableColumnHeaderProps,
  TableColumnHeaderProps,
} from './table-column-header.types';

export function TableColumnHeader(_props: TableColumnHeaderProps) {
  return null;
}

export const DEFAULT_TABLE_COLUMN_HEADER_PROPS: DefaultTableColumnHeaderProps =
  {
    alignment: {
      horizontal: 'start',
      vertical: 'center',
    },

    children: null,
  };
