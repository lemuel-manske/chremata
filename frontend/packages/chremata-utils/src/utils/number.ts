/**
 * Returns whether a number is even.
 *
 * @param number - The number to check.
 *
 * @returns A boolean indicating whether the number is even.
 *
 * @example
 *
 * isEven(4); // true
 * isEven(7); // false
 */
function isEven(number: number): boolean {
  return number % 2 === 0;
}

export { isEven };
