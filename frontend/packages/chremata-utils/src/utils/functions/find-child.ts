import * as React from 'react';

/**
 * Finds a child element of a specific type within the given children.
 *
 * @param children - The children to search through.
 * @param type - The React component type to find.
 *
 * @returns The first child element of the specified type, or undefined if not found.
 *
 * @example
 *
 * const MyComponent = () => (
 *   <ParentComponent>
 *    <ChildComponentA />
 *  </ParentComponent>
 * );
 *
 * const foundChild = findChild(children, ChildComponentA);
 * // foundChild will be the <ChildComponentA /> element
 *
 * @see {@link https://reactjs.org/docs/react-api.html#reactchildren}
 */
function findChild<T>(
  children: React.ReactNode,
  type: React.ElementType<T>
): React.ReactElement<T> | undefined {
  return React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === type
  ) as React.ReactElement<T> | undefined;
}

export { findChild };
