import {
  type Size,
  type EnumOrStringLiteralTypesInclude,
} from '@chremata/utils';

type LabelAttributes = {
  /**
   * The id of the Label. None by default.
   */
  id?: string;

  /**
   * Whether the Label is disabled. Default is false.
   */
  disabled?: boolean;

  /**
   * The size of the Label. Default is 'medium'.
   */
  size?: LabelSize;

  /**
   * The color of the Label text. Default is inherited from parent.
   */
  color?: string;

  /**
   * The variant of the Label. Default is 'regular'.
   */
  variant?: LabelVariant;

  /**
   * The text label to be displayed within the Label. Required.
   */
  children: string;
};

export type LabelVariant = 'regular' | 'emphasis';

export type LabelSize = EnumOrStringLiteralTypesInclude<
  Size,
  'small' | 'medium' | 'large' | 'xlarge'
>;

export type LabelProps = LabelAttributes;

export type DefaultLabelProps = Required<
  Pick<LabelProps, 'disabled' | 'size' | 'variant' | 'color'>
>;
