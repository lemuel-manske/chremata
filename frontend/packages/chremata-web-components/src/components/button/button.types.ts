type ButtonEvents = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type ButtonProps = ButtonEvents & {
  /**
   * Button label.
   *
   * @example "Click me" "Submit"
   */
  label?: string;

  /**
   * Whether the button is disabled.
   *
   * @default false
   */
  disabled?: boolean;
};

export { type ButtonProps, type ButtonEvents };
