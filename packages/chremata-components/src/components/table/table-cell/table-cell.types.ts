import type {
  TableCellAlignmentOptions,
  TableColumnCellInfo,
} from '../table-column/table-column.types';

type TableCellAttributes = {
  alignment?: TableCellAlignmentOptions;

  children?: ((info: TableColumnCellInfo) => React.ReactNode) | React.ReactNode;
};

export type TableCellProps = TableCellAttributes;

export type DefaultTableCellProps = Required<
  Pick<TableCellProps, 'alignment' | 'children'>
>;
