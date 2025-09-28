import { test, expect } from '@jest/globals';

import { isEnterKey } from './is-enter-key';

test('returns `true` for Enter key', () => {
  expect(isEnterKey('Enter')).toBe(true);
});

test('returns `false` for non-Enter keys', () => {
  expect(isEnterKey(' ')).toBe(false);
  expect(isEnterKey('a')).toBe(false);
  expect(isEnterKey('')).toBe(false);
  expect(isEnterKey('  ')).toBe(false);
});
