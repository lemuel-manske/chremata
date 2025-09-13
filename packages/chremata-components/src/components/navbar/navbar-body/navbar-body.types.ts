import * as React from 'react';

import { type NavbarItemProps } from '../navbar-item/navbar-item.types';

export type NavbarBodyProps = {
  children: React.ReactElement<NavbarItemProps> | React.ReactElement<NavbarItemProps>[];
}