import { Icon } from '../../icon/icon';

import { type LabelIconProps } from './label-icon.types';
import { useLabelContext } from '../label.context';
import type { LabelSize } from '../label.types';
import type { IconSize } from '../../icon/icon.types';

const ICON_SIZE_MAP: Record<LabelSize, IconSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge',
  xxlarge: 'xlarge',
}

export function LabelIcon(props: LabelIconProps) {
  const { name } = props;

  const { label, size } = useLabelContext();

  return (
    <Icon
      label={label}
      name={name}
      size={ICON_SIZE_MAP[size]}
      primaryColor={'currentColor'}
    />
  );
}
