import { type NavbarItemProps } from './navbar-item.types';
import { Button } from '../../button/button';

export function NavbarItem(props: NavbarItemProps) {
  return (
    <Button
      variant="secondary"
      size="fillAvailable"
      {...props}
    />
  );
}
