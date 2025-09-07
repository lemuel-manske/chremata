import { type IconProps } from '../../icon/icon.types';

export type ButtonIconProps = {
  /**
   * The icon to be displayed within the ButtonIcon.
   */
  children: React.ReactElement<IconProps>;

  /**
   * The color of the icon. Defaults to 'currentColor'.
   */
  color?: string;
};

export type DefaultButtonIconProps = Pick<ButtonIconProps, 'color'>;
