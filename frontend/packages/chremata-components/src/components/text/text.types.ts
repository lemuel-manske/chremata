enum TextSize {
  SMALL = 'small',
  REGULAR = 'regular',
  LARGE = 'large',
}

enum TextColor {
  DARK = 'dark',
  LIGHT = 'light',
}

type TextProps = {
  value: string;
  bold?: boolean;
  italic?: boolean;
  size?: TextSize;
  className?: string;
  color?: TextColor;
};

export { type TextProps, TextSize, TextColor };
