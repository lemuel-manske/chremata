type UserEvent = () => void;

type ButtonLabel = string;

type ButtonProps = {
  disabled?: boolean;
  label?: ButtonLabel;
  onClick?: UserEvent;
};

export type { ButtonProps };
