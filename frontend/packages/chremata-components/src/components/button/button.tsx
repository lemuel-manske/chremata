type UserEvent = () => void;

type ButtonLabel = string;

type ButtonProps = {
  disabled?: boolean;
  label?: ButtonLabel;
  onClick?: UserEvent;
};

const Button = (props: ButtonProps) => {
  const { onClick, label, disabled } = props;

  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
