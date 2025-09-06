import { type ButtonLabelProps } from './button-label.types';

export function ButtonLabel(props: ButtonLabelProps) {
  const { children: label } = props;

  return <span aria-label={label}>{label}</span>;
}
