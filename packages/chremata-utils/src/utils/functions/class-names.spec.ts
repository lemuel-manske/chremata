import { expect, test } from '@jest/globals';

import { classNames } from './class-names';

test('only apply when `true`', () => {
  const classes = classNames({
    'class-true': true,
    'class-false': false,
  });

  expect(classes).toBe('class-true');
});
