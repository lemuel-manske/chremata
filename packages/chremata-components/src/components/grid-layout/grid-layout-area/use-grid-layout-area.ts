import {
  type AreaPadding,
  type DefaultGridAreaProps,
  type GridAreaProps,
} from '../grid-layout.types';

const PADDING_MAP: Record<NonNullable<AreaPadding>, string> = {
  none: 'var(--grid-layout-area-padding-none)',
  small: 'var(--grid-layout-area-padding-small)',
  medium: 'var(--grid-layout-area-padding-medium)',
  large: 'var(--grid-layout-area-padding-large)',
};

export const DEFAULT_GRID_AREA_PROPS: DefaultGridAreaProps = {
  padding: 'none',
};

export function useGridLayoutArea(props: GridAreaProps) {
  const {
    areaName,
    children,
    padding: rawPadding = DEFAULT_GRID_AREA_PROPS.padding,
  } = props;

  const padding = PADDING_MAP[rawPadding];

  return {
    areaName,
    children,
    padding,
  };
}
