import * as React from 'react';

import { type ActionListItemProps } from './action-list-item/action-list-item.types';

type ActionListAttributes = {
  labelledBy?: string;

  controls?: string;

  children:
    | React.ReactElement<ActionListItemProps>
    | React.ReactElement<ActionListItemProps>[];
};

export type ActionListProps = ActionListAttributes;
