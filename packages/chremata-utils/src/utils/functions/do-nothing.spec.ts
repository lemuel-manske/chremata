import { test, expect } from '@jest/globals';

import { doNothing } from './do-nothing';

test('does nothing when called', () => {
  expect(doNothing()).toBeNull();
});

test('does not throw any error', () => {
  expect(() => doNothing()).not.toThrow();
});
