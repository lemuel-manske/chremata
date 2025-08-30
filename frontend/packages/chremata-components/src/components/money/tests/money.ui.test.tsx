import { test, expect } from '../../../fixtures/test';

import { Money } from '../money';

const TAGS = ['@currency-label'];

test('should render revenue with precision', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Money.Revenue amount={80.12} />);

  const currencyLabel = page.getByText('+R$ 80,12');

  await expect(currencyLabel).toBeVisible();
  await expect(currencyLabel).toNotHaveAccessibilityViolations();
});

test('should render expense with precision', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Money.Expense amount={50.46} />);

  const currencyLabel = page.getByText('-R$ 50,46');

  await expect(currencyLabel).toBeVisible();
  await expect(currencyLabel).toNotHaveAccessibilityViolations();
});

test('should render neutral with precision', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Money.Neutral amount={80.12} />);

  const currencyLabel = page.getByText('R$ 80,12');

  await expect(currencyLabel).toBeVisible();
  await expect(currencyLabel).toNotHaveAccessibilityViolations();
});
