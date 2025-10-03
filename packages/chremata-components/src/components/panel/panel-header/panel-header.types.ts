import * as React from 'react';

import type { PanelActionListProps } from '../panel-action-list/panel-action-list.types';
import type { PanelTitleProps } from '../panel-title/panel-title.types';

export type PanelHeaderProps = {
  children:
    | React.ReactElement<PanelTitleProps>
     |[React.ReactElement<PanelTitleProps>, React.ReactElement<PanelActionListProps>]
}