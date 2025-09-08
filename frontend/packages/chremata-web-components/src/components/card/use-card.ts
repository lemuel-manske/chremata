import { type CardProps, type DefaultCardProps } from './card.types';

export const DEFAULT_CARD_PROPS: DefaultCardProps = {
  subtitle: '',
};

export function useCard(props: CardProps) {
  const { title, subtitle = DEFAULT_CARD_PROPS.subtitle, children } = props;

  return {
    title,
    subtitle,
    children,
  };
}
