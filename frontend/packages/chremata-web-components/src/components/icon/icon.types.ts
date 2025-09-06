import { solid as SolidSVGs, type SVGSolidProps } from '@chremata/icons';

import {
  type Size,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

type IconSolidNames = keyof typeof SolidSVGs;

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
  label?: string;
  disabled?: boolean;
  size?: IconSize;
};

export type IconProps = InnerIconProps & IconWrapperProps;

export type IconDefaultProps = Required<Pick<IconProps, 'size' | 'disabled'>>;
