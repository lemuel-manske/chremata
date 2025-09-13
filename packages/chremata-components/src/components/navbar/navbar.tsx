import { classNames } from '@chremata/utils';

import { NavbarHeader } from './navbar-header/navbar-header';
import { NavbarItem } from './navbar-item/navbar-item';
import { NavbarBody } from './navbar-body/navbar-body';
import { NavbarFooter } from './navbar-footer/navbar-footer';

import { type NavbarProps } from './navbar.types';

import './index.css';

Navbar.Header = NavbarHeader;
Navbar.Body = NavbarBody;
Navbar.Item = NavbarItem;
Navbar.Footer = NavbarFooter;

export function Navbar(props: NavbarProps) {
  const { children } = props;

  const classes = classNames({
    'ch-navbar': true,
  });

  return <nav className={classes}>{children}</nav>;
}
