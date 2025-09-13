import { Icon } from '../icon/icon';
import { Label } from '../label/label';
import { Card } from './card';

export type CardFixtureProps = {
  title?: string;
  subtitle?: string;
  content?: string;
};

export function CardFixture(props: CardFixtureProps) {
  const { title, subtitle, content } = props;

  return (
    <Card
      title={title ?? 'Title'}
      subtitle={subtitle}>
      <Card.Header>
        <Icon
          size="xlarge"
          name="CoinIconSvg"
          label="Coin"
          primaryColor="var(--color-gray-40)"
        />
      </Card.Header>

      <Card.Body>
        <Label>{content ?? ''}</Label>
      </Card.Body>
    </Card>
  );
}
