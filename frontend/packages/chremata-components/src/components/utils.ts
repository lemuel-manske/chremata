interface ClassObject {
  [key: string]: boolean;
}

interface BreakpointObject {
  [key: string]: any[];
}

function classNames(classObject: ClassObject, breakpoints: BreakpointObject = {}): string {
  const classes = Object.entries(classObject)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const breakpointClasses = Object.entries(breakpoints).map(([key, value]) =>
    value.reduce((acc, v) => `${acc} ${key}@${v}`, '')
  );

  return [...classes, ...breakpointClasses].join(' ');
}

export default classNames;
