import { test, expect } from '@jest/globals';

import { isString } from './is-string';

test('returns true for strings', () => {
  expect(isString('')).toBe(true);
  expect(isString('hello')).toBe(true);
});

test('returns false for non-strings', () => {
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString(123)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
});
