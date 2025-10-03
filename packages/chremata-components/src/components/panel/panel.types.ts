import * as React from 'react';

import type { TableProps } from '../table/table.types';
import type { PanelHeaderProps } from './panel-header/panel-header.types';

type PanelAttributes = {
  children: [React.ReactElement<PanelHeaderProps>, React.ReactElement<TableProps>]
};

export type PanelProps = PanelAttributes;
