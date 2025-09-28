import { test, expect } from '@jest/globals';

import { isSpaceKey } from './is-space-key';

test('returns `true` for space key', () => {
  expect(isSpaceKey(' ')).toBe(true);
});

test('returns `false` for non-space keys', () => {
  expect(isSpaceKey('a')).toBe(false);
  expect(isSpaceKey('Enter')).toBe(false);
  expect(isSpaceKey('')).toBe(false);
  expect(isSpaceKey('  ')).toBe(false);
});
