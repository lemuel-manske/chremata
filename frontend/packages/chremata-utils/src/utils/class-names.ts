interface ClassObject {
  [key: string]: boolean;
}

const classNames = (classObject: ClassObject): string => {
  const classes = Object.entries(classObject)
    .filter(([, value]) => value)
    .map(([key]) => key);

  return [...classes].join(' ');
};

export { classNames };
