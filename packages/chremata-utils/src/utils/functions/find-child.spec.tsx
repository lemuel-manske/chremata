import { test, expect } from '@jest/globals';

import { findChild } from './find-child';

type ParentProps = {
  children: React.ReactNode;
};

function Parent(props: ParentProps) {
  const { children } = props;

  return <div>{children}</div>;
}

function Child() {
  return <div>Child</div>;
}

test('finds a child of the specified type', () => {
  const parent = (
    <Parent>
      <Child />
    </Parent>
  );

  const child = findChild(parent.props.children, Child);

  expect(child).toBeDefined();
  expect(child?.type).toBe(Child);
});

test('returns undefined when no child of the specified type is found', () => {
  const parent = (
    <Parent>
      <div>Not a Child</div>
    </Parent>
  );

  const child = findChild(parent.props.children, Child);

  expect(child).toBeUndefined();
});
