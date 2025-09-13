import { Label } from '../../label/label';

import type { NavbarHeaderProps } from './navbar-header.types';

import './index.css';

export function NavbarHeader(props: NavbarHeaderProps) {
  const { title } = props;

  return (
    <section className="ch-navbar-header">
      <Label
        size="xxlarge"
        variant="emphasis">
        <Label.Icon name="CoinIconSvg" />
        {title}
      </Label>
    </section>
  );
}
