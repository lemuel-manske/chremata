import { test as baseTest, expect, type Page } from '@playwright/test';

import { render, type RenderFixture } from './fixtures/render.js';

type CustomPage = Page & RenderFixture;

type CustomPlaywrightFixtures = {
  page: CustomPage;
};

const test = baseTest.extend<CustomPlaywrightFixtures>({
  /**
   * Renders the specified web component on page.
   *
   * @param component - The web component to render.
   *
   * @example await page.render('<my-component></my-component>');
   */
  page: async ({ page }, use) => {
    const customPage = Object.assign(page, {
      render: (component: string) => render(page, component),
    });

    await page.goto('/');

    await use(customPage);
  },
});

export { test, expect };
