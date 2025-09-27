import { classNames } from '@chremata/utils';

import { ListItem } from './list-item/list-item';

import { type ListProps } from './list.types';
import { useList } from './use-list';

import './index.css';

List.Item = ListItem;

export function List(props: ListProps) {
  const { gap, items, labelledBy, orientation } = useList(props);

  const classes = classNames({
    'ch-list': true,
    [`ch-list--${gap}`]: true,
    [`ch-list--${orientation}`]: true,
  });

  return (
    <ul
      aria-labelledby={labelledBy}
      className={classes}>
      {items}
    </ul>
  );
}
