import type { Alignment, EnumOrStringLiteralTypes } from '@chremata/utils';

import type {
  TableColumnHeaderCellInfo,
} from '../table-column/table-column.types';

export type TableColumnHeaderAlignmentOptions = {
  horizontal?: EnumOrStringLiteralTypes<Alignment>;
  vertical?: EnumOrStringLiteralTypes<Alignment>;
};

type TableColumnHeaderAttributes = {
  alignment?: TableColumnHeaderAlignmentOptions;

  children?:
    | ((info: TableColumnHeaderCellInfo) => React.ReactNode)
    | React.ReactNode;
};

export type TableColumnHeaderProps = TableColumnHeaderAttributes;

export type DefaultTableColumnHeaderProps = Required<
  Pick<TableColumnHeaderProps, 'alignment' | 'children'>
>;
