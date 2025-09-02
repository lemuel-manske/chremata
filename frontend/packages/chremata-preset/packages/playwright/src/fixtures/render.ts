import type { Page } from '@playwright/test';

type RenderFixture = {
  /**
   * Renders the specified web component on the current page.
   *
   * @param component - The web component to render.
   */
  render: (component: string) => Promise<void>;
};

/**
 * Generates an HTML template string with the specified web component.
 *
 * @param component - The web component to include in the template.
 * @returns A string containing the complete HTML template.
 */
function render(page: Page, component: string) {
  return page.evaluate(
    ([component]) => {
      const body = document.body;

      const wrapper = document.createElement('div');
      wrapper.innerHTML = component;

      body.appendChild(wrapper);
    },
    [component]
  );
}

export { render, type RenderFixture };
