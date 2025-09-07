import {
  type Size,
  type EnumOrStringLiteralTypes,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

import { type ButtonIconProps } from './button-icon/button-icon.types';

type ButtonEvents = {
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: () => void;
};

export enum ButtonVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type ButtonVariant = EnumOrStringLiteralTypes<ButtonVariantEnum>;

export type ButtonSize = EnumOrStringLiteralTypesInclude<
  Size,
  'small' | 'medium'
>;

type ButtonAttributes = {
  /**
   * The label of the Button.
   */
  label: string;

  /**
   * The size of the Button. Default is 'medium'.
   */
  size?: ButtonSize;

  /**
   * Whether the Button is disabled. Default is false.
   */
  disabled?: boolean;

  /**
   * The variant of the Button. Default is 'primary'.
   */
  variant?: ButtonVariant;

  /**
   * The icon of the Button. None by default.
   */
  children?: React.ReactElement<ButtonIconProps> | null;
};

export type ButtonProps = ButtonAttributes & ButtonEvents;

export type DefaultButtonProps = Required<
  Pick<ButtonProps, 'disabled' | 'size' | 'variant'>
>;
