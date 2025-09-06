import { solid as SolidSVGs, type SVGSolidProps } from '@chremata/icons';

import {
  type Size,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

type IconSolidNames = keyof typeof SolidSVGs;

type IconAttributes = {
  name: IconSolidNames;
};

type IconSize = EnumOrStringLiteralTypesInclude<
  Size,
  | 'fillAvailable'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
>;

type InnerIconProps = SVGSolidProps & IconAttributes;

type IconWrapperProps = {
  label?: string;
  disabled?: boolean;
  size?: IconSize;
};

type IconProps = InnerIconProps & IconWrapperProps;

type IconDefaultProps = Required<Pick<IconProps, 'size' | 'disabled'>>;

export {
  type InnerIconProps,
  type IconProps,
  type IconWrapperProps,
  type IconSize,
  type IconDefaultProps,
};
