import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';

test('should call onClick when focused and [Space] is pressed', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <Button
      label="Button"
      onClick={onClick}
    />
  );

  await user.tab();
  await user.keyboard('[Space]');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should call onClick when focused and [Enter] is pressed', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <Button
      label="Button"
      onClick={onClick}
    />
  );

  await user.tab();
  await user.keyboard('[Enter]');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should call onClick once clicked', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <Button
      label="Button"
      onClick={onClick}
    />
  );

  const button = screen.getByRole('button', { name: 'Button' });

  await user.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should not call onClick when disabled and clicked', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <Button
      disabled
      label="Button"
      onClick={onClick}
    />
  );

  const button = screen.getByRole('button', { name: 'Button' });

  await user.click(button);

  expect(onClick).toHaveBeenCalledTimes(0);
});
