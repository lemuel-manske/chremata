import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ActionList } from './action-list';

test('should call onClick when focused and [Space] is pressed', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick}>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await user.tab();
  await user.keyboard('[Space]');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should call onClick when focused and [Enter] is pressed', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick}>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await user.tab();
  await user.keyboard('[Enter]');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should call onClick once clicked', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick}>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  const button = screen.getByRole('button', { name: 'Add' });

  await user.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should not call onClick when disabled and clicked', async () => {
  const user = userEvent.setup();

  const onClick = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick} disabled>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  const button = screen.getByRole('button', { name: 'Add' });

  await user.click(button);

  expect(onClick).toHaveBeenCalledTimes(0);
});

test('should call onClick on first item when focused and [Space] is pressed', async () => {
  const user = userEvent.setup();

  const onClick1st = jest.fn();
  const onClick2nd = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick1st}>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item onClick={onClick2nd}>
        <ActionList.Item.Label>Edit</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await user.tab();
  await user.keyboard('[Space]');

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(0);  

  await user.tab();
  await user.keyboard('[Space]');

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(1);
});

test('should call onClick on first item when focused and [Enter] is pressed', async () => {
  const user = userEvent.setup();

  const onClick1st = jest.fn();
  const onClick2nd = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick1st}>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item onClick={onClick2nd}>
        <ActionList.Item.Label>Edit</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await user.tab();
  await user.keyboard('[Enter]');

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(0);

  await user.tab();
  await user.keyboard('[Enter]');

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(1);
});

test('should call onClick on first item when focused and clicked', async () => {
  const user = userEvent.setup();

  const onClick1st = jest.fn();
  const onClick2nd = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick1st}>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item onClick={onClick2nd}>
        <ActionList.Item.Label>Edit</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  const button1st = screen.getByRole('button', { name: 'Add' });
  const button2nd = screen.getByRole('button', { name: 'Edit' });

  await user.click(button1st);

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(0);

  await user.click(button2nd);

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(1);
});

test('should skip disabled items when using keyboard navigation', async () => {
  const user = userEvent.setup();

  const onClick1st = jest.fn();
  const onClick2nd = jest.fn();
  const onClick3rd = jest.fn();

  render(
    <ActionList>
      <ActionList.Item onClick={onClick1st}>
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item onClick={onClick2nd} disabled>
        <ActionList.Item.Label>Edit</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item onClick={onClick3rd}>
        <ActionList.Item.Label>Delete</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await user.tab();
  await user.keyboard('[Enter]');

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(0);
  expect(onClick3rd).toHaveBeenCalledTimes(0);

  await user.tab();
  await user.keyboard('[Enter]');

  expect(onClick1st).toHaveBeenCalledTimes(1);
  expect(onClick2nd).toHaveBeenCalledTimes(0);
  expect(onClick3rd).toHaveBeenCalledTimes(1);
});