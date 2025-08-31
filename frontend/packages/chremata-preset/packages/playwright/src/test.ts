import { test as baseTest, expect, type Page } from '@playwright/test';

import { render, type RenderFixture } from './fixtures/render.js';

type CustomPlaywrightFixtures = {
  render: RenderFixture;
};

const test = baseTest.extend<CustomPlaywrightFixtures>({
  /**
   * Renders the specified web component on the current page.
   *
   * @param component - The web component to render.
   *
   * @example await render('<my-component></my-component>');
   */
  render: async ({ page }: { page: Page }, use) => {
    await use({
      render: (component: string) => render(page, component),
    });
  },
});

export { test, expect };
