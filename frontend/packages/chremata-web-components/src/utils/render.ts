import type { Page } from '@playwright/test';

const makeTemplateWith = (component: string) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />

      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;

          min-width: 100vw;
          min-height: 100vh;
          
          margin: 0;
          padding: 0;
        }
      </style>

      <link rel="stylesheet" href="./dist/index.css" />
      <script type="module" src="./dist/index.mjs"></script>
    </head>
    
    <body>
      ${component}
    </body>
  </html>
`;

/**
 * Generates an HTML template string with the specified web component.
 *
 * @param component - The web component to include in the template.
 * @returns A string containing the complete HTML template.
 */
function render(page: Page, component: string) {
  return makeTemplateWith(component);
}

export { render };
