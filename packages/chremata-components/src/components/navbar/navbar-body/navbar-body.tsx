import type { NavbarBodyProps } from './navbar-body.types';

export function NavbarBody(props: NavbarBodyProps) {
  const { children } = props;

  return <section className="ch-navbar-body">{children}</section>;
}
