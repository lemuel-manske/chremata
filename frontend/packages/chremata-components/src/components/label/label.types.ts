import * as React from 'react';

import {
  type Size,
  type EnumOrStringLiteralTypes,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

import type { LabelIconProps } from './label-icon/label-icon.types';

export enum LabelColorEnum {
  REGULAR = 'regular',
  ACCENT = 'accent',
}

export type LabelColor = EnumOrStringLiteralTypes<LabelColorEnum>;

type LabelAttributes = {
  /**
   * The id of the Label. None by default.
   */
  id?: string;

  /**
   * The color of the Label. Default is 'regular'.
   */
  color?: LabelColor;

  /**
   * Whether the Label is disabled. Default is false.
   */
  disabled?: boolean;

  /**
   * The size of the Label. Default is 'medium'.
   */
  size?: LabelSize;

  /**
   * The variant of the Label. Default is 'regular'.
   */
  variant?: LabelVariant;

  /**
   * The text label to be displayed within the Label with or without an Icon. Required.
   */
  children:
    | string
    | [React.ReactElement<LabelIconProps>, string]
    | [null, string]
    | [undefined, string];
};

export type LabelVariant = 'regular' | 'emphasis';

export type LabelSize = EnumOrStringLiteralTypesInclude<
  Size,
  'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
>;

export type LabelProps = LabelAttributes;

export type DefaultLabelProps = Required<
  Pick<LabelProps, 'disabled' | 'size' | 'variant' | 'color'>
>;
