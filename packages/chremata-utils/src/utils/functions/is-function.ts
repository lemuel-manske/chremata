/**
 * Returns whether {@link fn} is a `function`.
 */
export function isFunction<T extends (...args: any[]) => any>(
  fn?: unknown
): fn is T {
  return typeof fn === 'function';
}
