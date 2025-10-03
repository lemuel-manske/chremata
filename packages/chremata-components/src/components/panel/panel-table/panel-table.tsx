import { Table } from "../../table/table";

import { usePanelContext } from "../panel.context";

import type { PanelTableProps } from "./panel-table.types";

export function PanelTable(props: PanelTableProps) {
  const { children, ...rest } = props;

  const { tableId, labelId } = usePanelContext();

  return (
    <Table id={tableId} labelledBy={labelId} {...rest}>
      {children}
    </Table>
  );
}
