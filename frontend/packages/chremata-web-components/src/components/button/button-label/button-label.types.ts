export type ButtonLabelProps = {
  /**
   * The text label to be displayed within the ButtonLabel.
   */
  children: string;

  /**
   * The color of the label text. Defaults to 'inherit'.
   */
  color?: string;
};

export type DefaultButtonLabelProps = Pick<ButtonLabelProps, 'color'>;
