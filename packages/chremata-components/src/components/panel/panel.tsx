import { classNames } from "@chremata/utils";

import { ActionList } from "../action-list/action-list";
import { ActionListItem } from "../action-list/action-list-item/action-list-item";
import { TableColumnCell } from "../table/table-column-cell/table-column-cell";
import { TableColumnHeader } from "../table/table-column-header/table-column-header";
import { TableColumn } from "../table/table-column/table-column";

import { PanelHeader } from "./panel-header/panel-header";
import { PanelTable } from "./panel-table/panel-table";
import { PanelTitle } from "./panel-title/panel-title";

import { PanelContext } from "./panel.context";
import type { PanelProps } from "./panel.types";
import { usePanel } from "./use-panel";

import "./index.css";

Panel.ActionList = ActionList;
Panel.ActionItem = ActionListItem;
Panel.Header = PanelHeader;
Panel.Title = PanelTitle;
Panel.Table = PanelTable;
Panel.TableCell = TableColumnCell;
Panel.TableColumn = TableColumn;
Panel.TableColumnHeader = TableColumnHeader;

export function Panel(props: PanelProps) {
  const {
    actionList,
    title,
    table,
    tableId,
    labelId,
  } = usePanel(props);

  const wrapperClasses = classNames({
    'ch-panel': true,
  });

  const headerClasses = classNames({
    'ch-panel--header': true,
  });

  const contextValue = {
    labelId,
    tableId,
  }

  return (
    <PanelContext.Provider value={contextValue}>
      <div className={wrapperClasses}>
        <div className={headerClasses}>
          {title}

          {actionList}
        </div>

        {table}
      </div>
    </PanelContext.Provider>
  )
}
