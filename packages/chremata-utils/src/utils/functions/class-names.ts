interface ClassObject {
  [key: string]: boolean;
}

/**
 * Conditional join class names.
 *
 * @param classObject - An object where keys are class names and values are booleans indicating whether to include the class.
 *
 * @returns A string of class names that have a truthy value in the input object.
 *
 * @example
 *
 * const classes = classNames({ 'class-a': true, 'class-b': false, 'class-c': true });
 * // classes will be 'class-a class-c'
 */
const classNames = (classObject: ClassObject): string => {
  const classes = Object.entries(classObject)
    .filter(([, value]) => value)
    .map(([key]) => key);

  return [...classes].join(' ');
};

export { classNames };
