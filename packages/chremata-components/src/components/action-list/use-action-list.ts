import type { ActionListProps } from './action-list.types';

export function useActionList(props: ActionListProps) {
  const { labelledBy, controls, children } = props;

  const items = [children].flat();

  return {
    labelledBy,
    controls,
    items,
  };
}
