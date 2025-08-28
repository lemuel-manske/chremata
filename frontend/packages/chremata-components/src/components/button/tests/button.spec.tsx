import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../button';

test('should render a button', async () => {
  render(<Button />)
});

test('should render a button and tap it', async () => {
  const user = userEvent.setup();

  const onTap = jest.fn()

  render(<Button onClick={onTap} />)

  const button = screen.getByRole('button')

  await user.click(button)

  expect(onTap).toHaveBeenCalledTimes(1)
});
