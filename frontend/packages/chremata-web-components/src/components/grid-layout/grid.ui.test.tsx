import { test, expect } from '@playwright/experimental-ct-react';

import { Label } from '../label/label';

import { GridLayout } from './grid-layout';

test(
  'should render a grid layout',
  { tag: ['@ch-grid'] },
  async ({ mount, page }) => {
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

    await expect(grid).toBeVisible();
  }
);
