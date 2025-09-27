import { List } from '../list/list';

import { ActionListItem } from './action-list-item/action-list-item';

import type { ActionListProps } from './action-list.types';
import { useActionList } from './use-action-list';

ActionList.Item = ActionListItem;

export function ActionList(props: ActionListProps) {
  const { labelledBy, controls, items } = useActionList(props);

  function mapItems() {
    return items.map((item, index) => (
      <List.Item
        key={index}
        label={item.props.children}>
        {item}
      </List.Item>
    ));
  }

  return (
    <div
      aria-labelledby={labelledBy}
      aria-controls={controls}
      role="group">
      <List
        gap="small"
        orientation="horizontal">
        {mapItems()}
      </List>
    </div>
  );
}
