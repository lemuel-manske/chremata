import { type ButtonProps } from '../../button/button.types';

type ActionListItemAttributes = Pick<
  ButtonProps,
  'disabled' | 'icon' | 'variant' | 'onClick'
> & {
  children: string;
};

export type ActionListItemProps = ActionListItemAttributes;
