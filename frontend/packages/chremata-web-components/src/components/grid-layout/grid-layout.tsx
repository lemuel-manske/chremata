import { classNames, styleMap } from '@chremata/utils';

import { type GridLayoutProps } from './grid-layout.types';
import { useGridLayout } from './use-grid-layout';

import { GridLayoutArea } from './grid-layout-area/grid-layout-area';

import './index.css';

GridLayout.Area = GridLayoutArea;

export function GridLayout(props: GridLayoutProps) {
  const {
    children,
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
    '--grid-column-gap': columnGap,
    '--grid-row-gap': rowGap,
    '--grid-template-areas': templateArea,
    '--grid-template-columns': templateColumns,
    '--grid-template-rows': templateRows,
    '--grid-container-padding': padding,
  });

  return (
    <div
      className={classes}
      style={styles}>
      {children}
    </div>
  );
}
