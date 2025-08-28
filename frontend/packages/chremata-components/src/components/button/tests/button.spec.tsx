import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../button';

test('should call `onClick` when clicked', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(<Button onClick={onClick} />);

  const button = screen.getByRole('button');

  await user.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should call `onClick` when focused and [Enter] is pressed', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(<Button onClick={onClick} />);

  const button = screen.getByRole('button');

  await user.tab();
  await user.keyboard('[Enter]');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should call `onClick` when focused and [Space] is pressed', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(<Button onClick={onClick} />);

  await user.tab();
  await user.keyboard('[Space]');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should call `onClick` event on labeled button', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(<Button label="Button" onClick={onClick} />);

  const button = screen.getByRole('button', { name: 'Button' });

  await user.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should not call `onClick` event when click disabled button', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(<Button label="Button" onClick={onClick} disabled />);

  const button = screen.getByRole('button');

  await user.click(button);

  expect(onClick).toHaveBeenCalledTimes(0);
});
