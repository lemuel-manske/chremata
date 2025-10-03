import type { DefaultListProps, ListProps } from './list.types';

import tokens from './list.tokens';

export const DEFAULT_LIST_PROPS: DefaultListProps = {
  gap: 'small',
  orientation: 'horizontal',
};

export function useList(props: ListProps) {
  const {
    children,
    gap = DEFAULT_LIST_PROPS.gap,
    labelledBy,
    orientation = DEFAULT_LIST_PROPS.orientation,
  } = props;

  const items = [children].flat();

  const listGap = tokens.gap[gap];
  const listOrientation = tokens.orientation[orientation];

  return {
    gap: listGap,
    items,
    labelledBy,
    orientation: listOrientation,
  };
}
