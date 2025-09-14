import { test, expect } from '@jest/globals';

import { getStringValue } from './get-string-value';

test('returns the same string when a string is provided', () => {
  const result = getStringValue('hello');

  expect(result).toBe('hello');
});

test('joins array of strings with a space when an array is provided', () => {
  const result = getStringValue(['hello', 'world']);

  expect(result).toBe('hello world');
});
