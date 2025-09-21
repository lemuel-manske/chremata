import { test, expect } from '@chremata-preset/playwright/test';

import { Icon } from '../icon/icon';
import { Label } from '../label/label';

import { Card } from './card';

const tag = ['@ch-card'];

test('should render a Card', { tag }, async ({ mount, page }) => {
  await mount(
    <Card
      title="Card title"
      subtitle="Card subtitle">
      <Card.Header />

      <Card.Body>
        <Label>Card content</Label>
      </Card.Body>
    </Card>
  );

  const card = page.getByRole('article');

  await expect(card).toNotHaveAccessibilityViolations();
});
