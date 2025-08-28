type ButtonProps = {
  onClick?: () => void;
};

const Button = ((props: ButtonProps) => {
  const { onClick } = props;

  return <button onClick={onClick}></button>;
});

export {
  Button,
};
