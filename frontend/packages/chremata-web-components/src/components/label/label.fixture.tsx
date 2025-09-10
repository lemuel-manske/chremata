import { doNothing } from '@chremata/utils';
import { type IconSolidNames } from '../icon/icon.types';

import { Label } from './label';
import type { DefaultLabelProps } from './label.types';

export type LabelWithIconProps = DefaultLabelProps & {
  label: string;
  icon: IconSolidNames;

  hiddenIcon?: boolean;
};

export function LabelWithIcon(props: LabelWithIconProps) {
  const { icon, hiddenIcon, label, ...rest } = props;

  return (
    <Label {...rest}>
      {hiddenIcon ? doNothing() : <Label.Icon name={icon} />}
      {label}
    </Label>
  );
}
