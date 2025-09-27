import type { TableColumnData } from '../table-column/table-column.types';

import type { TableData } from '../table.types';

type TableContentAttributes = {
  columns: TableColumnData[];

  data: TableData;
};

export type TableContentProps = TableContentAttributes;
