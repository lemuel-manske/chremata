import { classNames, styleMap } from '@chremata/utils';

import { type GridAreaProps } from '../grid-layout.types';
import { useGridLayoutArea } from './use-grid-layout-area';

import './index.css';

export function GridLayoutArea(props: GridAreaProps) {
  const { areaName, padding, children } = useGridLayoutArea(props);

  const styles = styleMap({
    '--grid-area': areaName,
    '--grid-area-padding': padding,
  });

  const classes = classNames({
    'ch-grid-area': true,
  });

  return (
    <div
      className={classes}
      style={styles}>
      {children}
    </div>
  );
}
