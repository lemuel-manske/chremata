import { test, expect } from '@chremata-preset/playwright/test';

import { Table } from './table';

test(
  'should render a Table',
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

    const rows = table.getByRole('row');

    await expect(rows).toHaveCount(3);

    await expect(table).toNotHaveAccessibilityViolations();
  }
);
