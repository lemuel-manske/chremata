import { TableColumnCell } from './table-column-cell/table-column-cell';
import { TableColumn } from './table-column/table-column';
import { TableColumnHeader } from './table-column-header/table-column-header';

import type { TableProps } from './table.types';
import { useTable } from './use-table';
import { TableHeader } from './table-header/table-header';
import { TableContent } from './table-content/table-content';

import './index.css';

export function Table(props: TableProps) {
  const { columns, data, label, labelledBy, onSort, sortBy, sortDirection } =
    useTable(props);

  return (
    <div
      role="grid"
      className="ch-table"
      aria-label={label}
      aria-labelledby={labelledBy}>
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortBy={sortBy}
        sortDirection={sortDirection}
      />

      <TableContent
        data={data}
        columns={columns}
      />
    </div>
  );
}

Table.Column = TableColumn;
Table.ColumnHeader = TableColumnHeader;
Table.Cell = TableColumnCell;
