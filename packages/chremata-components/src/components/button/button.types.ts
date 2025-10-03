import * as React from 'react';

import {
  type Fit,
  type Size,
  type UserEvent,
  type EnumOrStringLiteralTypes,
  type EnumOrStringLiteralTypesInclude,
  type LayoutJustify,
} from '@chremata/utils';

import type { ButtonLabelProps } from './button-label/button-label.types';
import type { ButtonIconProps } from './button-icon/button-icon.types';

export enum ButtonVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SILENT_EMPHASIS = 'silentEmphasis',
}

export type ButtonJustify = EnumOrStringLiteralTypesInclude<LayoutJustify, 'center' | 'spaceBetween'>;

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
    | [
        React.ReactElement<ButtonIconProps>,
        React.ReactElement<ButtonLabelProps>,
      ]
    | [
        React.ReactElement<ButtonLabelProps>,
        React.ReactElement<ButtonIconProps>,
      ]
    | [
        React.ReactElement<ButtonLabelProps>,
        null
      ]
    | [
        null,
        React.ReactElement<ButtonLabelProps>,
      ];

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
  
  /**
   * Justify content of the Button. Default is 'center'.
   */
  justify?: ButtonJustify;
};

export type ButtonProps = ButtonAttributes & ButtonEvents;

export type DefaultButtonProps = Required<
  Pick<ButtonProps, 'disabled' | 'size' | 'variant' | 'fit' | 'justify'>
>;
