import {
  type DefaultGridAreaProps,
  type GridAreaProps,
} from '../grid-layout.types';

import tokens from './grid-layout-area.tokens';

export const DEFAULT_GRID_AREA_PROPS: DefaultGridAreaProps = {
  padding: 'none',
};

export function useGridLayoutArea(props: GridAreaProps) {
  const {
    areaName,
    children,
    padding: rawPadding = DEFAULT_GRID_AREA_PROPS.padding,
  } = props;

  const padding = tokens.padding[rawPadding];

  return {
    areaName,
    children,
    padding,
  };
}
