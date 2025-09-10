import { Icon } from '../../icon/icon';

import { type LabelIconProps } from './label-icon.types';
import { useLabelContext } from '../label.context';

export function LabelIcon(props: LabelIconProps) {
  const { name } = props;

  const { label, size } = useLabelContext();

  return (
    <Icon
      label={label}
      name={name}
      size={size}
      primaryColor={'currentColor'}
    />
  );
}
