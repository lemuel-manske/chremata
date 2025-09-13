/**
 * Removes null and undefined values from an array.
 *
 * @param array - The array to filter.
 *
 * @returns A new array with null and undefined values removed.
 *
 * @example
 *
 * removeNulls([1, null, 2, undefined, 3]);
 * // returns [1, 2, 3]
 */
export function removeNulls<T>(array: (T | null | undefined)[]): T[] {
  return array.filter((item): item is T => item != null);
}
