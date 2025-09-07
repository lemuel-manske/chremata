import { Icon } from './icon';

import { type IconSize, type IconSolidNames } from './icon.types';

export type SolidIconProps = {
  label: string;
  primaryColor: string;
  name: IconSolidNames;

  disabled?: boolean;
  size?: IconSize;
};

export function SolidIcon(props: SolidIconProps) {
  return <Icon {...props} />;
}
