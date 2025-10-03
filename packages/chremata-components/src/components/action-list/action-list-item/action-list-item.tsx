import { Button } from '../../button/button';

import type { ActionListItemProps } from './action-list-item.types';

ActionListItem.Icon = Button.Icon;
ActionListItem.Label = Button.Label;

export function ActionListItem(props: ActionListItemProps) {
  const { children } = props;

  return <Button {...props}>{children}</Button>;
}
