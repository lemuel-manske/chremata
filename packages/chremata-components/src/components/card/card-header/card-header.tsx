import { classNames } from '@chremata/utils';

import { Label } from '../../label/label';

import { useCardContext } from '../card.context';

import { type CardHeaderProps } from './card-header.types';

export function CardHeader(_props: CardHeaderProps) {
  const classes = classNames({
    'ch-card-header': true,
  });

  const { title, subtitle } = useCardContext();

  return (
    <header className={classes}>
      <section>
        <h2>
          <Label
            size="xlarge"
            variant="emphasis">
            {title}
          </Label>
        </h2>

        {subtitle && <Label size="medium">{subtitle}</Label>}
      </section>
    </header>
  );
}
