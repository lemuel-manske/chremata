import { isString } from './is-string';

/**
 * Get the string value from a string or an array of strings.
 *
 * @param value - A string or an array of strings.
 *
 * @returns A single string. If the input is an array, the strings are joined with a space.
 *
 * @example
 *
 * getStringValue('hello');
 * // returns 'hello'
 *
 * getStringValue(['hello', 'world']);
 *
 * // returns 'hello world'
 */
export function getStringValue(value: string | string[] | undefined): string {
  if (isString(value)) {
    return value;
  }

  if (value) {
    return value.join(' ');
  }

  return '';
}
