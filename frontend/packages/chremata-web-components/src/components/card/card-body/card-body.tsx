import { type CardBodyProps } from './card-body.types';

export function CardBody(props: CardBodyProps) {
  const { children } = props;

  return <section>{children}</section>;
}
