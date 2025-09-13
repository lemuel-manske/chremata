/**
 * Maps an object of styles to a CSS style object.
 *
 * @param styles The styles to map.
 *
 * @returns The mapped styles.
 *
 * @example
 *
 * const styles = styleMap({
 *   'grid-template-columns': 'repeat(3, 1fr)',
 *   'grid-gap': '10px',
 * });
 * // styles will be { 'grid-template-columns': 'repeat(3, 1fr)', 'grid-gap': '10px' }
 */
export function styleMap(styles: {
  [key: string]: string | number | undefined;
}) {
  return Object.entries(styles).reduce(
    (acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }

      return acc;
    },
    {} as { [key: string]: string | number }
  );
}
