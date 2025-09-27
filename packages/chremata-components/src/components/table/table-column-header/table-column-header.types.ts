import type {
  TableCellAlignmentOptions,
  TableColumnHeaderCellInfo,
} from '../table-column/table-column.types';

type TableColumnHeaderAttributes = {
  alignment?: TableCellAlignmentOptions;

  children?:
    | ((info: TableColumnHeaderCellInfo) => React.ReactNode)
    | React.ReactNode;
};

export type TableColumnHeaderProps = TableColumnHeaderAttributes;

export type DefaultTableColumnHeaderProps = Required<
  Pick<TableColumnHeaderProps, 'alignment' | 'children'>
>;
