import { test, expect } from '@jest/globals';

import { styleMap } from './style-map';

test('converts style object to CSS string', () => {
  const styles = styleMap({
    'grid-template-columns': 'repeat(3, 1fr)',
    'grid-gap': '10px',
    numericStyle: 5,
  });

  expect(styles).toEqual({
    'grid-template-columns': 'repeat(3, 1fr)',
    'grid-gap': '10px',
    numericStyle: 5,
  });
});

test('filters undefined styles', () => {
  const styles = styleMap({
    'grid-template-columns': undefined,
    'grid-gap': '10px',
    numericStyle: undefined,
  });

  expect(styles).toEqual({
    'grid-gap': '10px',
  });
});
