import * as React from 'react';

import type { ActionListProps } from '../../action-list/action-list.types';

import type { PanelTitleProps } from '../panel-title/panel-title.types';

export type PanelHeaderProps = {
  /**
   * Header content.
   */
  children:
    | React.ReactElement<PanelTitleProps>
    | [
        React.ReactElement<PanelTitleProps>,
        React.ReactElement<ActionListProps>,
      ];
};
