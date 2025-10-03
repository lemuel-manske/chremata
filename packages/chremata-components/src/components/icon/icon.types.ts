import { type CursorType } from '@chremata/utils';

import { solid as SolidSVGs, type SVGSolidProps } from '@chremata/icons';

import {
  type Size,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

export type IconSolidNames = keyof typeof SolidSVGs;

type IconAttributes = {
  name: IconSolidNames;
};

export type IconSize = EnumOrStringLiteralTypesInclude<
  Size,
  'small' | 'medium' | 'large' | 'xlarge'
>;

export type InnerIconProps = SVGSolidProps & IconAttributes;

export type IconProps = InnerIconProps & {
  /**
   * The icon text label.
   */
  label: string;

  /**
   * Whether the icon is disabled. Defaults to `false`.
   */
  disabled?: boolean;

  /**
   * The icon size. Defaults to `medium`.
   */
  size?: IconSize;

  /**
   * The icon cursor. Defaults to `default`.
   */
  pointer?: CursorType;
};

export type IconDefaultProps = Required<
  Pick<IconProps, 'size' | 'disabled' | 'pointer'>
>;
