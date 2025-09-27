import { Label } from '../../label/label';

import { TableContentCell } from './table-content-cell/table-content-cell';
import { TableContentRow } from './table-content-row/table-content-row';
import { useTableContent } from './use-table-content';

import { type TableContentProps } from './table-content.types';

export function TableContent(props: TableContentProps) {
  const { columns, data } = props;

  const { rows } = useTableContent(props);

  const isEmpty = data.length === 0;

  const renderRows = () =>
    rows.map((cells, index) => {
      const cellElements = cells.map((cell, cellIndex) => {
        const { node, width } = cell;

        return (
          <TableContentCell
            key={cellIndex}
            width={width}>
            {node}
          </TableContentCell>
        );
      });

      return <TableContentRow key={index}>{cellElements}</TableContentRow>;
    });

  const renderEmpty = () => {
    function renderEmptyLabel() {
      return (
        <Label
          variant="emphasis"
          size="large">
          No data
        </Label>
      );
    }

    const count = columns.length;

    return (
      <TableContentRow>
        <TableContentCell colSpan={count}>
          {renderEmptyLabel()}
        </TableContentCell>
      </TableContentRow>
    );
  };

  return (
    <div
      className="ch-table-content"
      role="rowgroup">
      {isEmpty ? renderEmpty() : renderRows()}
    </div>
  );
}
