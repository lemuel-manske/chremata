const config = {
  jsc: {
    parser: {
      decorators: true,
      syntax: 'typescript',
      tsx: true,
    },
    transform: {
      react: {
        runtime: 'automatic',
      },
    },
  },
  minify: true,
};

export { config };
