import {
  type Size,
  type EnumOrStringLiteralTypes,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

export enum LabelVariantEnum {
  REGULAR = 'regular',
  EMPHASIS = 'emphasis',
}

export type LabelVariant = EnumOrStringLiteralTypes<LabelVariantEnum>;

export type LabelSize = EnumOrStringLiteralTypesInclude<
  Size,
  'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
>;

type LabelAttributes = {
  /**
   * The id of the Label. None by default.
   */
  id?: string;

  /**
   * The color of the Label. Default is 'regular'.
   */
  color?: string;

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
  children: string;
};

export type LabelProps = LabelAttributes;

export type DefaultLabelProps = Required<
  Pick<LabelProps, 'disabled' | 'size' | 'variant'>
>;
