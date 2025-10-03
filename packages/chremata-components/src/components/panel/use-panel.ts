import * as React from 'react';

import { findChild } from '@chremata/utils';

import type { PanelProps } from './panel.types';
import { PanelTitle } from './panel-title/panel-title';
import { PanelTable } from './panel-table/panel-table';
import { PanelHeader } from './panel-header/panel-header';
import { ActionList } from '../action-list/action-list';

export function usePanel(props: PanelProps) {
  const { children } = props;

  const childrenArray = [children].flat();

  const table = findChild(childrenArray, PanelTable);

  if (!table) {
    throw new Error('[Panel] No `PanelTable` provided.');
  }

  const header = findChild(childrenArray, PanelHeader);

  if (!header) {
    throw new Error('[Panel] No `PanelHeader` provided.');
  }

  const headerChildren = [header.props.children].flat();

  const title = findChild(headerChildren, PanelTitle);

  if (!title) {
    throw new Error('[Panel] No `PanelTitle` provided.');
  }

  const actions = findChild(headerChildren, ActionList);

  const labelId = crypto.randomUUID();
  const tableId = crypto.randomUUID();

  const actionList = actions
    ? React.cloneElement(actions, {
        controls: tableId,
      })
    : null;

  return {
    actionList,
    title,
    table,
    labelId,
    tableId,
  };
}
