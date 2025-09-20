import {
  type LayoutGap,
  type LayoutPadding,
  type DefaultGridLayoutProps,
  type GridLayoutProps,
} from './grid-layout.types';

import { getStringValue, isString } from '@chremata/utils';

const PADDING_MAP: Record<NonNullable<LayoutPadding>, string> = {
  none: 'var(--grid-layout-padding-none)',
  small: 'var(--grid-layout-padding-small)',
  medium: 'var(--grid-layout-padding-medium)',
};

const GAP_MAP: Record<NonNullable<LayoutGap>, string> = {
  none: 'var(--grid-layout-gap-none)',
  panel: 'var(--grid-layout-gap-panel)',
};

export const DEFAULT_GRID_LAYOUT_PROPS: DefaultGridLayoutProps = {
  columnGap: 'panel',
  rowGap: 'panel',
  padding: 'small',
};

export function useGridLayout(props: GridLayoutProps) {
  const {
    children,
    areas,
    columns,
    rows,
    padding: rawPadding = DEFAULT_GRID_LAYOUT_PROPS.padding,
    columnGap: rawColumnGap = DEFAULT_GRID_LAYOUT_PROPS.columnGap,
    rowGap: rawRowGap = DEFAULT_GRID_LAYOUT_PROPS.rowGap,
  } = props;

  const templateAreaString = isString(areas)
    ? areas
    : areas.map(row => `"${row.join(' ')}"`).join(' ');

  const templateColumnsString = getStringValue(columns);
  const templateRowsString = getStringValue(rows);

  const padding = PADDING_MAP[rawPadding];
  const columnGap = GAP_MAP[rawColumnGap];
  const rowGap = GAP_MAP[rawRowGap];

  return {
    children,
    columnGap,
    rowGap,
    padding,
    templateArea: templateAreaString,
    templateColumns: templateColumnsString,
    templateRows: templateRowsString,
  };
}
