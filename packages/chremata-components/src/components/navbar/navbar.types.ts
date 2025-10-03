import * as React from 'react';

import { type NavbarHeaderProps } from './navbar-header/navbar-header.types';
import { type NavbarFooterProps } from './navbar-footer/navbar-footer.types';
import type { NavbarBodyProps } from './navbar-body/navbar-body.types';

export type NavbarProps = {
  children: [
    React.ReactElement<NavbarHeaderProps>,
    React.ReactElement<NavbarBodyProps>,
    React.ReactElement<NavbarFooterProps>?,
  ];
};
