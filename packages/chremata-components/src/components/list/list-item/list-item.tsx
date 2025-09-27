import { classNames } from '@chremata/utils';
import { type ListItemProps } from './list-item.types';

import './index.css';

export function ListItem(props: ListItemProps) {
  const { children, label } = props;

  const classes = classNames({
    'ch-list-item': true,
  });

  return (
    <div
      aria-label={label}
      className={classes}
      role="listitem">
      {children}
    </div>
  );
}
