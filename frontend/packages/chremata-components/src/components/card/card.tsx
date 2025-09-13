import { classNames } from '@chremata/utils';

import { CardHeader } from './card-header/card-header';
import { CardBody } from './card-body/card-body';

import { type CardProps } from './card.types';
import { useCard } from './use-card';

import './index.css';
import { CardContext } from './card.context';

Card.Body = CardBody;
Card.Header = CardHeader;

export function Card(props: CardProps) {
  const { title, subtitle, children } = useCard(props);

  const classes = classNames({
    'ch-card': true,
  });

  const cardContextValue = {
    title,
    subtitle,
  };

  return (
    <CardContext.Provider value={cardContextValue}>
      <article className={classes}>{children}</article>
    </CardContext.Provider>
  );
}
