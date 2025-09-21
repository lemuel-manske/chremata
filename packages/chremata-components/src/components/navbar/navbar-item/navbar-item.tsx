import { Button } from '../../button/button';

import { type NavbarItemProps } from './navbar-item.types';

export function NavbarItem(props: NavbarItemProps) {
  return (
    <Button
      variant="secondary"
      size="fillAvailable"
      {...props}
    />
  );
}
