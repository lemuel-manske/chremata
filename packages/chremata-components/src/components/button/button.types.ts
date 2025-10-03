import * as React from 'react';

import {
  type Fit,
  type Size,
  type UserEvent,
  type EnumOrStringLiteralTypes,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

import type { IconSolidNames } from '../icon/icon.types';

import type { ButtonLabelProps } from './button-label/button-label.types';
import type { ButtonIconProps } from './button-icon/button-icon.types';

export enum ButtonVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type ButtonVariant = EnumOrStringLiteralTypes<ButtonVariantEnum>;

export type ButtonSize = EnumOrStringLiteralTypesInclude<
  Size,
  'small' | 'medium' | 'large'
>;

export type ButtonFit = EnumOrStringLiteralTypesInclude<
  Fit,
  'fitContent' | 'fillAvailable'
>;

type ButtonEvents = {
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: UserEvent;
};

type ButtonAttributes = {
  /**
   * The label of the Button.
   */
  children:
    | React.ReactElement<ButtonLabelProps>
    | [React.ReactElement<ButtonIconProps>, React.ReactElement<ButtonLabelProps>]
    | [React.ReactElement<ButtonLabelProps>, React.ReactElement<ButtonIconProps>];

  /**
   * The size of the Button. Default is 'medium'.
   */
  size?: ButtonSize;

  /**
   * The fit of the Button. Default is 'fitContent'.
   */
  fit?: ButtonFit;

  /**
   * Whether the Button is disabled. Default is false.
   */
  disabled?: boolean;

  /**
   * The variant of the Button. Default is 'primary'.
   */
  variant?: ButtonVariant;
};

export type ButtonProps = ButtonAttributes & ButtonEvents;

export type DefaultButtonProps = Required<
  Pick<ButtonProps, 'disabled' | 'size' | 'variant' | 'fit'>
>;
