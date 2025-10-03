import { Icon } from '../../icon/icon';
import type { IconSize } from '../../icon/icon.types';
import { useButtonContext } from '../button.context';

import type { ButtonSize } from '../button.types';

import type { ButtonIconProps } from './button-icon.types';

const ICON_SIZE_MAP: Record<ButtonSize, IconSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export function ButtonIcon(props: ButtonIconProps) {
  const { name } = props;

  const { label, size, color } = useButtonContext();

  return (
    <Icon
      label={label}
      name={name}
      size={ICON_SIZE_MAP[size]}
      primaryColor={color}
    />
  );
}
