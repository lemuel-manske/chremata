import { type TableHeaderProps } from './table-header.types';

import { TableHeaderCell } from './table-header-cell';
import { TableHeaderRow } from './table-header-row';
import { useTableHeader } from './use-table-header';

export function TableHeader(props: TableHeaderProps) {
  const { cells } = useTableHeader(props);

  const renderCells = () => {
    return cells.map((cell, index) => {
      const { width, node, sortable, sortDirection, onSort } = cell;

      return (
        <TableHeaderCell
          key={index}
          width={width}
          sortable={sortable}
          sortDirection={sortDirection}
          onSort={onSort}>
          {node}
        </TableHeaderCell>
      );
    });
  };

  return (
    <div
      className="ch-table-header"
      role="rowgroup">
      <TableHeaderRow>{renderCells()}</TableHeaderRow>
    </div>
  );
}
