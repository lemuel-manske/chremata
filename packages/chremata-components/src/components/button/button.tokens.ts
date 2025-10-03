export default {
  fit: {
    fillAvailable: 'stretch',
    fitContent: 'max-content',
  },

  size: {
    small: {
      padding: '8px 12px',
    },
    medium: {
      padding: '12px 16px',
    },
    large: {
      padding: '16px 20px',
    },
  },

  variant: {
    primary: {
      background: {
        default: 'hsl(var(--color-light-green-5))',
        active: 'hsl(var(--color-light-green-15))',
        disabled: 'hsla(var(--color-light-green-5), 70%)',
        hover: 'hsl(var(--color-light-green-10))',
        focusVisible: 'hsl(var(--color-light-green-5))',
      },

      color: {
        default: 'var(--color-contrast-dark)',
        disabled: 'var(--color-contrast-dark-disabled)',
      },
    },

    secondary: {
      background: {
        default: 'transparent',
        active: 'hsl(var(--color-dark-green-80))',
        disabled: 'transparent',
        hover: 'hsl(var(--color-dark-green-75))',
        focusVisible: 'hsl(var(--color-dark-green-75))',
      },

      color: {
        default: 'var(--color-contrast-light)',
        disabled: 'var(--color-contrast-light-disabled)',
      },
    },

    silentEmphasis: {
      background: {
        default: 'transparent',
        active: 'transparent',
        disabled: 'transparent',
        hover: 'hsl(var(--color-dark-green-90))',
        focusVisible: 'hsl(var(--color-dark-green-90))',
      },

      color: {
        default: 'var(--color-contrast-light)',
        disabled: 'var(--color-contrast-light-disabled)',
      },
    },
  },
};
