import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Title } from '../title';

test('should render title', () => {
  render(<Title value="My title" />);

  const title = screen.getByText('My title');

  expect(title).toBeDefined();
});

test('should render title with subtitle', () => {
  render(<Title value="My title" subtitleValue="My subtitle" />);

  const title = screen.getByText('My title');
  const subtitle = screen.getByText('My subtitle');

  expect(title).toBeDefined();
  expect(subtitle).toBeDefined();
});
