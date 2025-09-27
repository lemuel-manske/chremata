import { Button } from '../../button/button';

import type { ActionListItemProps } from './action-list-item.types';

export function ActionListItem(props: ActionListItemProps) {
  const { children } = props;

  const label = children;

  return (
    <Button
      label={label}
      {...props}
    />
  );
}
