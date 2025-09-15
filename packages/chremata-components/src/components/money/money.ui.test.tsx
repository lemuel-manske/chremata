import { test, expect } from '@chremata-preset/playwright/test';

import { Currency } from '@chremata/utils';

import { Money } from './money';

test(
  'should render a USD Money',
  { tag: ['@ch-money'] },
  async ({ mount, page }) => {
    await mount(
      <Money
        amount={1234.56}
        currency={Currency.US_DOLLAR}
      />
    );

    const money = page.getByText('+US$ 1.234,56');

    await expect(money).toNotHaveAccessibilityViolations();
  }
);

test(
  'should render a negative USD Money',
  { tag: ['@ch-money'] },
  async ({ mount, page }) => {
    await mount(
      <Money
        amount={-1234.56}
        currency={Currency.US_DOLLAR}
      />
    );

    const money = page.getByText('-US$ 1.234,56');

    await expect(money).toNotHaveAccessibilityViolations();
  }
);

test(
  'should render emphasis USD Money',
  { tag: ['@ch-money'] },
  async ({ mount, page }) => {
    await mount(
      <Money
        amount={1234.56}
        currency={Currency.US_DOLLAR}
        variant="emphasis"
      />
    );

    const money = page.getByText('+US$ 1.234,56');

    await expect(money).toNotHaveAccessibilityViolations();
  }
);

test(
  'should render small USD Money',
  { tag: ['@ch-money'] },
  async ({ mount, page }) => {
    await mount(
      <Money
        amount={1234.56}
        currency={Currency.US_DOLLAR}
        size="small"
      />
    );

    const money = page.getByText('+US$ 1.234,56');

    await expect(money).toNotHaveAccessibilityViolations();
  }
);

test(
  'should render large USD Money',
  { tag: ['@ch-money'] },
  async ({ mount, page }) => {
    await mount(
      <Money
        amount={1234.56}
        currency={Currency.US_DOLLAR}
        size="large"
      />
    );

    const money = page.getByText('+US$ 1.234,56');

    await expect(money).toNotHaveAccessibilityViolations();
  }
);

test(
  'should render a xlarge USD Money',
  { tag: ['@ch-money'] },
  async ({ mount, page }) => {
    await mount(
      <Money
        amount={1234.56}
        currency={Currency.US_DOLLAR}
        size="xlarge"
      />
    );

    const money = page.getByText('+US$ 1.234,56');

    await expect(money).toNotHaveAccessibilityViolations();
  }
);
