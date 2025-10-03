import { Label } from '../../label/label';

import { usePanelContext } from '../panel.context';

import type { PanelTitleProps } from './panel-title.types';

export function PanelTitle(props: PanelTitleProps) {
  const { children } = props;

  const { labelId } = usePanelContext();

  return (
    <Label
      id={labelId}
      variant="emphasis"
      size="xlarge">
      {children}
    </Label>
  );
}
