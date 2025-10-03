import type { TableContentCellProps } from '../table-content-cell/table-content-cell.types';

type TableContentRowAttributes = {
  children:
    | React.ReactElement<TableContentCellProps>
    | React.ReactElement<TableContentCellProps>[];
};

export type TableContentRowProps = TableContentRowAttributes;
