import {
  type LayoutGap,
  type LayoutPadding,
  type DefaultGridLayoutProps,
  type GridLayoutProps,
  type BackgroundEnum,
} from './grid-layout.types';

import { getStringValue, isString } from '@chremata/utils';

const BACKGROUND_MAP: Record<BackgroundEnum, string> = {
  main: 'var(--background-main)',
  surface: 'var(--background-surface)',
  detached: 'var(--background-detached)',
};

const PADDING_MAP: Record<NonNullable<LayoutPadding>, string> = {
  none: 'var(--grid-layout-padding-none)',
  small: 'var(--grid-layout-padding-small)',
};

const GAP_MAP: Record<NonNullable<LayoutGap>, string> = {
  none: 'var(--grid-layout-gap-none)',
  panel: 'var(--grid-layout-gap-panel)',
};

export const DEFAULT_GRID_LAYOUT_PROPS: DefaultGridLayoutProps = {
  background: 'main',
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
    background: rawBackground = DEFAULT_GRID_LAYOUT_PROPS.background,
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
  const background = BACKGROUND_MAP[rawBackground];

  return {
    children,
    background,
    columnGap,
    rowGap,
    padding,
    templateArea: templateAreaString,
    templateColumns: templateColumnsString,
    templateRows: templateRowsString,
  };
}
