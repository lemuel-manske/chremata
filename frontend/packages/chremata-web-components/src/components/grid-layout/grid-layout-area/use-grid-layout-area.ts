import {
  type DefaultGridAreaProps,
  type GridAreaProps,
} from '../grid-layout.types';

import { PADDING_MAP } from '../grid-layout.styles';

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
    padding,
    children,
  };
}
