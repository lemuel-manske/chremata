import type {
  TableColumnData,
  TableSortDirection,
} from '../table-column/table-column.types';

export type TableHeaderProps = {
  columns: TableColumnData[];

  onSort?: (accessorKey: string) => void;

  sortBy?: string;

  sortDirection?: TableSortDirection;
};
