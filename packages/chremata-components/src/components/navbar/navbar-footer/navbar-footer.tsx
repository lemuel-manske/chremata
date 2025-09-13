import  { type NavbarFooterProps } from "./navbar-footer.types";

import "./index.css";

export function NavbarFooter(props: NavbarFooterProps) {
  const { children } = props;

  return <section className="ch-navbar-footer">{children}</section>;
}