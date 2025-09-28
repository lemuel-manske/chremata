import { test, expect } from '@jest/globals';

import { isFunction } from './is-function';

test('returns `true` for a function', () => {
  const func = () => {};

  expect(isFunction(func)).toBe(true);
});

test('returns `false` for non-function values', () => {
  const values = [null, undefined, 123, 'string', {}, []];

  values.forEach((value) => {
    expect(isFunction(value)).toBe(false);
  });
});
