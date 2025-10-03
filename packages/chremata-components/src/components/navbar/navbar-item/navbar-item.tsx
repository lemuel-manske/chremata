import { Button } from '../../button/button';

import { type NavbarItemProps } from './navbar-item.types';

export function NavbarItem(props: NavbarItemProps) {
  const { children, ...rest } = props;
  
  return (
    <Button
      variant="secondary"
      size="medium"
      fit="fillAvailable"
      {...rest}>
      <Button.Label>{children}</Button.Label>
    </Button>
  );
}
