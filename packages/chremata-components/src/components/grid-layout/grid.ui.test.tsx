import { test, expect } from '@chremata-preset/playwright/test';

import { Label } from '../label/label';

import { GridLayout } from './grid-layout';

const tag = ['@ch-grid'];

test('should render a GridLayout', { tag }, async ({ mount, page }) => {
  const grid = await mount(
    <GridLayout
      columnGap="panel"
      rowGap="panel"
      padding="small"
      areas='"header header header" "sidebar main main" "footer footer footer"'
      columns="200px auto 100px"
      rows="100px auto auto">
      <GridLayout.Area
        areaName="header"
        padding="small">
        <Label>Header</Label>
      </GridLayout.Area>

      <GridLayout.Area
        areaName="sidebar"
        padding="small">
        <Label>Sidebar</Label>
      </GridLayout.Area>

      <GridLayout.Area areaName="main">
        <Label>Main</Label>
      </GridLayout.Area>

      <GridLayout.Area
        areaName="footer"
        padding="small">
        <Label>Footer</Label>
      </GridLayout.Area>
    </GridLayout>
  );

  await expect(grid).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
