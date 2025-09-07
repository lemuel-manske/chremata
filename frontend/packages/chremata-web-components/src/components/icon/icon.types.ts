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
  | 'fillAvailable'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
>;

export type InnerIconProps = SVGSolidProps & IconAttributes;

export type IconWrapperProps = {
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

export type IconProps = InnerIconProps & IconWrapperProps;

export type IconDefaultProps = Required<Pick<IconProps, 'size' | 'disabled'>>;
