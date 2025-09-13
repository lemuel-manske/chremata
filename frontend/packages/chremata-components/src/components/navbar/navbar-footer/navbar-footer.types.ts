import * as React from 'react';

import { type NavbarItemProps } from '../navbar-item/navbar-item.types';

export type NavbarFooterProps = {
  children: React.ReactElement<NavbarItemProps> | React.ReactElement<NavbarItemProps>[];
}