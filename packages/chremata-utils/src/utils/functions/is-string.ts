/**
 * Check if a value is a string.
 *
 * @param value - The value to check.
 *
 * @returns True if the value is a string, false otherwise.
 *
 * @example
 *
 * isString('hello');
 * // returns true
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}
