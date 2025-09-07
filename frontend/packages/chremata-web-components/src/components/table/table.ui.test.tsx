import { test, expect } from '@playwright/experimental-ct-react';

import { Table } from './table';

test(
  'should render table with caption',
  { tag: ['@ch-table'] },
  async ({ mount, page }) => {
    await mount(
      <Table
        caption="Sample Table"
        columns={[
          { label: 'Name', key: 'name' },
          { label: 'Age', key: 'age' },
        ]}
        data={[
          { name: 'Alice', age: 30, country: 'USA' },
          { name: 'Bob', age: 25, country: 'Canada' },
        ]}
      />
    );

    const table = page.getByRole('grid', { name: 'Sample Table' });

    await expect(table).toBeVisible();

    const rows = table.getByRole('row');

    await expect(rows).toHaveCount(3);
  }
);
