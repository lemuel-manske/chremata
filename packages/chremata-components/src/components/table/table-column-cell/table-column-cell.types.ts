import type { Alignment, EnumOrStringLiteralTypes } from '@chremata/utils';

import type {
  TableColumnCellInfo,
} from '../table-column/table-column.types';

export type TableColumnCellAlignmentOptions = {
  horizontal?: EnumOrStringLiteralTypes<Alignment>;
  vertical?: EnumOrStringLiteralTypes<Alignment>;
};

type TableColumnCellAttributes = {
  alignment?: TableColumnCellAlignmentOptions;

  children?:
    | ((info: TableColumnCellInfo) => React.ReactNode)
    | React.ReactNode;
};

export type TableColumnCellProps = TableColumnCellAttributes;

export type DefaultTableColumnCellProps = Required<
  Pick<TableColumnCellProps, 'alignment' | 'children'>
>;
