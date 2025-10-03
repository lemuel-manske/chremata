import { classNames, styleMap } from '@chremata/utils';

import { ListItem } from './list-item/list-item';

import { type ListProps } from './list.types';
import { useList } from './use-list';

import './index.css';

List.Item = ListItem;

export function List(props: ListProps) {
  const { gap, items, labelledBy, orientation } = useList(props);

  const classes = classNames({
    'ch-list': true,
  });

  const style = styleMap({
    '--list-gap': gap,
    '--list-flex-direction': orientation.flexDirection,
    '--list-align-items': orientation.alignItems,
    '--list-justify-items': orientation.justifyItems,
  });

  return (
    <ul
      aria-labelledby={labelledBy}
      className={classes}
      style={style}>
      {items}
    </ul>
  );
}
