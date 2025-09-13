import { classNames, styleMap } from '@chremata/utils';

import { type GridLayoutProps } from './grid-layout.types';
import { useGridLayout } from './use-grid-layout';

import { GridLayoutArea } from './grid-layout-area/grid-layout-area';

import './index.css';

GridLayout.Area = GridLayoutArea;

export function GridLayout(props: GridLayoutProps) {
  const {
    children,
    background,
    columnGap,
    rowGap,
    padding,
    templateArea,
    templateColumns,
    templateRows,
  } = useGridLayout(props);

  const classes = classNames({
    'ch-grid': true,
  });

  const styles = styleMap({
    '--grid-layout-background': background,
    '--grid-layout-column-gap': columnGap,
    '--grid-layout-row-gap': rowGap,
    '--grid-layout-template-areas': templateArea,
    '--grid-layout-template-columns': templateColumns,
    '--grid-layout-template-rows': templateRows,
    '--grid-layout-padding': padding,
  });

  return (
    <div
      className={classes}
      style={styles}>
      {children}
    </div>
  );
}
