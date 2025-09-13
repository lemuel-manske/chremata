import { solid as SolidSVGs, type SVGSolidProps } from '@chremata/icons';

import {
  type Size,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

export type IconSolidNames = keyof typeof SolidSVGs;

type IconAttributes = {
  /**
   * The name of the SVG icon.
   */
  name: IconSolidNames;
};

export type IconSize = EnumOrStringLiteralTypesInclude<
  Size,
  'small' | 'medium' | 'large' | 'xlarge'
>;

export type InnerIconProps = SVGSolidProps & IconAttributes;

export type IconProps = InnerIconProps & {
  /**
   * The Icon label. A11y requirement.
   */
  label: string;

  /**
   * Whether the Icon is disabled. Default is false.
   */
  disabled?: boolean;

  /**
   * The size of the Icon. Default is 'medium'.
   */
  size?: IconSize;
};

export type IconDefaultProps = Required<Pick<IconProps, 'size' | 'disabled'>>;
