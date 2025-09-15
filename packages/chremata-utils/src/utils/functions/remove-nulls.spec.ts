import { test, expect } from '@jest/globals';

import { removeNulls } from './remove-nulls';

test('removes null and undefined values from an array', () => {
  const result = removeNulls([1, null, 2, undefined, 3, null]);

  expect(result).toEqual([1, 2, 3]);
});
