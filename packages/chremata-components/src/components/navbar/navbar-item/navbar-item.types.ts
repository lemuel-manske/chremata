import { type ButtonProps } from '../../button/button.types';

type NavbarItemAttributes = Pick<
  ButtonProps,
  'disabled' | 'icon' | 'onClick'
> & {
  children: string;
};

export type NavbarItemProps = NavbarItemAttributes;
